package com.santunandi.portfolio.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.*;
import java.security.DigestInputStream;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.HexFormat;
import java.util.List;

@Service
public class DocumentStorageService {

    private final Path storageLocation;

    private static final List<String> ALLOWED_CONTENT_TYPES = Arrays.asList(
            "application/pdf",
            "image/png",
            "image/jpeg",
            "image/svg+xml"
    );

    public DocumentStorageService(@Value("${portfolio.storage.upload-dir:./vault-storage}") String uploadDir) {
        this.storageLocation = Paths.get(uploadDir).toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.storageLocation);
        } catch (IOException ex) {
            throw new RuntimeException("Could not initialize storage directory", ex);
        }
    }

    public StorageResult storeDocument(MultipartFile file, String recordId) throws IOException {
        String contentType = file.getContentType();
        if (contentType == null || !ALLOWED_CONTENT_TYPES.contains(contentType.toLowerCase())) {
            throw new IllegalArgumentException("Invalid file type. Only PDF and Image documents are allowed.");
        }

        if (file.getSize() > 10 * 1024 * 1024) {
            throw new IllegalArgumentException("File size exceeds 10MB limit.");
        }

        String originalFilename = file.getOriginalFilename() != null ? file.getOriginalFilename() : "document.pdf";
        String cleanExtension = originalFilename.contains(".") ? originalFilename.substring(originalFilename.lastIndexOf(".")) : ".pdf";
        String targetFilename = recordId + "_" + System.currentTimeMillis() + cleanExtension;
        Path targetPath = this.storageLocation.resolve(targetFilename);

        MessageDigest md;
        try {
            md = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }

        try (InputStream is = file.getInputStream();
             DigestInputStream dis = new DigestInputStream(is, md)) {
            Files.copy(dis, targetPath, StandardCopyOption.REPLACE_EXISTING);
        }

        String sha256Hex = HexFormat.of().formatHex(md.digest()).toUpperCase();

        return new StorageResult(targetFilename, targetPath.toString(), sha256Hex, file.getSize());
    }

    public Resource loadAsResource(String filename) {
        try {
            Path file = storageLocation.resolve(filename).normalize();
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("File not found or unreadable: " + filename);
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Invalid file path: " + filename, e);
        }
    }

    public static class StorageResult {
        private final String filename;
        private final String fullPath;
        private final String sha256Hash;
        private final long sizeBytes;

        public StorageResult(String filename, String fullPath, String sha256Hash, long sizeBytes) {
            this.filename = filename;
            this.fullPath = fullPath;
            this.sha256Hash = sha256Hash;
            this.sizeBytes = sizeBytes;
        }

        public String getFilename() { return filename; }
        public String getFullPath() { return fullPath; }
        public String getSha256Hash() { return sha256Hash; }
        public long getSizeBytes() { return sizeBytes; }
    }
}

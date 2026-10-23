package com.santunandi.portfolio.controller;

import com.santunandi.portfolio.model.AcademicRecordEntity;
import com.santunandi.portfolio.repository.AcademicRecordRepository;
import com.santunandi.portfolio.service.DocumentStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "*")
public class DocumentStreamController {

    @Autowired
    private AcademicRecordRepository academicRecordRepository;

    @Autowired
    private DocumentStorageService documentStorageService;

    /**
     * Authenticated endpoint to stream original master document with integrity headers.
     * Accessible by authorized users or admin.
     */
    @GetMapping("/stream-original/{id}")
    public ResponseEntity<Resource> streamOriginalDocument(@PathVariable String id) {
        return academicRecordRepository.findById(id).map(record -> {
            if (record.getVisibility() == AcademicRecordEntity.DocumentVisibility.PRIVATE && !record.isDownloadAuthorized()) {
                return ResponseEntity.status(403).<Resource>build();
            }

            if (record.getStorageFilePath() == null) {
                return ResponseEntity.notFound().<Resource>build();
            }

            Resource resource = documentStorageService.loadAsResource(record.getStorageFilePath());

            return ResponseEntity.ok()
                    .contentType(MediaType.APPLICATION_PDF)
                    .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + record.getDocumentTitle() + ".pdf\"")
                    .header("X-Document-Integrity-SHA256", record.getVerificationHash())
                    .body(resource);
        }).orElse(ResponseEntity.notFound().build());
    }
}

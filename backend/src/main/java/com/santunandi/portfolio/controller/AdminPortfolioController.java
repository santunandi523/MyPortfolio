package com.santunandi.portfolio.controller;

import com.santunandi.portfolio.model.AcademicRecordEntity;
import com.santunandi.portfolio.model.CertificateEntity;
import com.santunandi.portfolio.model.ProjectEntity;
import com.santunandi.portfolio.repository.AcademicRecordRepository;
import com.santunandi.portfolio.repository.CertificateRepository;
import com.santunandi.portfolio.repository.ContactMessageRepository;
import com.santunandi.portfolio.repository.ProjectRepository;
import com.santunandi.portfolio.service.DocumentStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "*")
public class AdminPortfolioController {

    @Autowired
    private AcademicRecordRepository academicRecordRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private CertificateRepository certificateRepository;

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @Autowired
    private DocumentStorageService documentStorageService;

    @PutMapping("/academic-records/{id}")
    public ResponseEntity<AcademicRecordEntity> updateAcademicRecord(@PathVariable String id,
                                                                      @RequestBody AcademicRecordEntity updated) {
        if (!academicRecordRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        updated.setId(id);
        return ResponseEntity.ok(academicRecordRepository.save(updated));
    }

    @PostMapping("/academic-records/{id}/upload-document")
    public ResponseEntity<?> uploadAcademicDocument(@PathVariable String id,
                                                    @RequestParam("file") MultipartFile file) {
        return academicRecordRepository.findById(id).map(record -> {
            try {
                DocumentStorageService.StorageResult res = documentStorageService.storeDocument(file, id);
                record.setStorageFilePath(res.getFilename());
                record.setVerificationHash(res.getSha256Hash());
                record.setDocumentSize((res.getSizeBytes() / 1024) + " KB");
                academicRecordRepository.save(record);

                return ResponseEntity.ok(Map.of(
                        "message", "Document stored & hashed successfully",
                        "hash", res.getSha256Hash(),
                        "filename", res.getFilename()
                ));
            } catch (IOException | IllegalArgumentException e) {
                return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
            }
        }).orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/projects")
    public ResponseEntity<ProjectEntity> createProject(@RequestBody ProjectEntity project) {
        return ResponseEntity.ok(projectRepository.save(project));
    }

    @PutMapping("/projects/{id}")
    public ResponseEntity<ProjectEntity> updateProject(@PathVariable String id,
                                                       @RequestBody ProjectEntity project) {
        project.setId(id);
        return ResponseEntity.ok(projectRepository.save(project));
    }

    @DeleteMapping("/projects/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable String id) {
        projectRepository.deleteById(id);
        return ResponseEntity.ok(Map.of("message", "Project deleted"));
    }

    @GetMapping("/messages")
    public ResponseEntity<?> listInquiries() {
        return ResponseEntity.ok(contactMessageRepository.findAllByOrderByCreatedAtDesc());
    }
}

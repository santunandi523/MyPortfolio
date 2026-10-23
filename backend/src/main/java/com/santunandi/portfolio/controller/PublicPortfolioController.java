package com.santunandi.portfolio.controller;

import com.santunandi.portfolio.model.AcademicRecordEntity;
import com.santunandi.portfolio.model.CertificateEntity;
import com.santunandi.portfolio.model.ContactMessageEntity;
import com.santunandi.portfolio.model.ProjectEntity;
import com.santunandi.portfolio.repository.AcademicRecordRepository;
import com.santunandi.portfolio.repository.CertificateRepository;
import com.santunandi.portfolio.repository.ContactMessageRepository;
import com.santunandi.portfolio.repository.ProjectRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/public")
@CrossOrigin(origins = "*")
public class PublicPortfolioController {

    @Autowired
    private AcademicRecordRepository academicRecordRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private CertificateRepository certificateRepository;

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @GetMapping("/profile")
    public ResponseEntity<Map<String, Object>> getPublicProfile() {
        Map<String, Object> profile = new HashMap<>();
        profile.put("name", "Santu Nandi");
        profile.put("title", "Java Full Stack Developer | Computer Science Engineering Student");
        profile.put("institution", "Chandigarh University");
        profile.put("cgpa", 8.3);
        profile.put("leetcodeRating", 1618);
        profile.put("dsaSolved", 850);
        profile.put("status", "Open to Software Engineering Internships & Full-Time Roles (2025-2026)");
        profile.put("github", "https://github.com/santunandi523");
        profile.put("codolio", "https://codolio.com/profile/santunandi");
        profile.put("leetcode", "https://leetcode.com/u/Santu_2004/");
        return ResponseEntity.ok(profile);
    }

    @GetMapping("/academic-vault")
    public ResponseEntity<List<AcademicRecordEntity>> getAcademicRecords() {
        // Enforces privacy: returns records where visibility is PUBLIC or REDACTED (excludes PRIVATE)
        List<AcademicRecordEntity> records = academicRecordRepository.findAll();
        records.removeIf(r -> r.getVisibility() == AcademicRecordEntity.DocumentVisibility.PRIVATE);
        return ResponseEntity.ok(records);
    }

    @GetMapping("/projects")
    public ResponseEntity<List<ProjectEntity>> getProjects() {
        return ResponseEntity.ok(projectRepository.findAll());
    }

    @GetMapping("/projects/{slug}")
    public ResponseEntity<ProjectEntity> getProjectBySlug(@PathVariable String slug) {
        return projectRepository.findBySlug(slug)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/certificates")
    public ResponseEntity<List<CertificateEntity>> getCertificates() {
        return ResponseEntity.ok(certificateRepository.findAll());
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContactMessage(@RequestBody ContactMessageEntity msg) {
        if (msg.getName() == null || msg.getEmail() == null || msg.getMessage() == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "Missing required fields"));
        }
        contactMessageRepository.save(msg);
        return ResponseEntity.ok(Map.of("message", "Inquiry transmitted successfully. Notification dispatched."));
    }
}

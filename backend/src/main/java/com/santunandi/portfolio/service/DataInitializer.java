package com.santunandi.portfolio.service;

import com.santunandi.portfolio.model.AcademicRecordEntity;
import com.santunandi.portfolio.model.CertificateEntity;
import com.santunandi.portfolio.model.ProjectEntity;
import com.santunandi.portfolio.repository.AcademicRecordRepository;
import com.santunandi.portfolio.repository.CertificateRepository;
import com.santunandi.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private AcademicRecordRepository academicRecordRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private CertificateRepository certificateRepository;

    @Override
    public void run(String... args) {
        if (academicRecordRepository.count() == 0) {
            seedAcademicRecords();
        }
        if (projectRepository.count() == 0) {
            seedProjects();
        }
        if (certificateRepository.count() == 0) {
            seedCertificates();
        }
    }

    private void seedAcademicRecords() {
        academicRecordRepository.save(new AcademicRecordEntity(
                "acad-univ-cu",
                "university",
                "CS201-Bachelor of Engineering (B.E.) — Computer Science & Engineering",
                "Chandigarh University, Mohali, Punjab",
                "Chandigarh University (NAAC A+ Accredited)",
                "Current CGPA",
                "8.25 / 10.0 (5th Sem Pending)",
                "Expected 2028",
                "[\"Cumulative CGPA: 8.25 across completed 4 semesters\",\"Semester 3: 8.70, Semester 2: 8.60, Semester 4: 8.04, Semester 1: 7.62\",\"Currently in 5th Semester (Pending)\",\"UID: 24BCS10650 — CS201 Computer Science & Engineering\"]",
                "Student's Final Result — CS201 B.E. Computer Science & Engineering",
                "Official University Result Sheet (Chandigarh University UIMS)",
                "201 KB",
                AcademicRecordEntity.DocumentVisibility.PUBLIC,
                true,
                "CU-BE-CSE-24BCS10650-825-VERIFIED",
                "Semester IV Completed / Semester V Pending",
                true
        ));

        academicRecordRepository.save(new AcademicRecordEntity(
                "acad-class12-wbchse",
                "class12",
                "Higher Secondary Education (Class XII) — Pure Science",
                "Higher Secondary School, West Bengal",
                "West Bengal Council of Higher Secondary Education (WBCHSE)",
                "Aggregate Percentage",
                "82.8%",
                "2022",
                "[\"82.8% aggregate in Pure Science stream with Physics, Chemistry, and Mathematics\"]",
                "Higher Secondary Examination Marksheet & Certificate",
                "Official Board Marksheet (WBCHSE)",
                "890 KB",
                AcademicRecordEntity.DocumentVisibility.PUBLIC,
                true,
                "WBCHSE-XII-2022-828-VERIFIED-SECURE",
                "June 2022",
                true
        ));

        academicRecordRepository.save(new AcademicRecordEntity(
                "acad-class10-wbbse",
                "class10",
                "Secondary Education (Class X) — Madhyamik Examination",
                "High School, West Bengal Govt. Sponsored",
                "West Bengal Board of Secondary Education (WBBSE)",
                "Aggregate Percentage",
                "94.14%",
                "2020",
                "[\"Distinguished 94.14% aggregate percentage (659 out of 700 total marks)\",\"Top 0.5% percentile statewide in West Bengal Secondary Examination\",\"Distinction in Mathematics (98/100) and Physical Science (97/100)\"]",
                "Madhyamik Pariksha Marksheet & Pass Certificate",
                "Official Board Marksheet (WBBSE)",
                "920 KB",
                AcademicRecordEntity.DocumentVisibility.PUBLIC,
                true,
                "WBBSE-X-2020-9414-VERIFIED-AUTH",
                "July 2020",
                true
        ));
    }

    private void seedProjects() {
        projectRepository.save(new ProjectEntity(
                "proj-foodyhub",
                "foodyhub",
                "FoodyHub — AI-Powered Food Delivery Platform",
                "End-to-end full stack commerce platform with Spring Boot, Razorpay payments, AWS S3, and Gemini AI nutritional intelligence.",
                true,
                "Full Stack & AI Microservices",
                "Production Ready",
                "Lead Full Stack Architect & Backend Engineer",
                "September 2024 – January 2025",
                "https://github.com/santunandi523",
                "https://github.com/santunandi523",
                "[\"Java 17\",\"Spring Boot 3\",\"React 19\",\"Spring Security\",\"JWT\",\"MySQL / MongoDB\",\"Razorpay API\",\"AWS S3\",\"Gemini API\"]",
                "FoodyHub is a full-featured, production-ready food ordering and restaurant management platform engineered to deliver ultra-fast search, secure transactions, and intelligent dining recommendations.",
                "High concurrency shopping cart drop-offs, inventory overselling, and lack of personalized nutritional intelligence.",
                "Modular Spring Boot REST service with connection-pooled databases, JWT stateless sessions, Razorpay HMAC-SHA256 verification, and Gemini LLM structured outputs."
        ));

        projectRepository.save(new ProjectEntity(
                "proj-packsure",
                "packsure",
                "PackSure — Automated Product Compliance Scanner",
                "Enterprise-grade packaging compliance system utilizing Spring Boot 3, Python OCR, and Legal Metrology rules engine with human-in-the-loop review.",
                true,
                "Computer Vision & Regulatory Engineering",
                "Production Ready",
                "Full Stack Engineer & Core Rules Engine Developer",
                "October 2024 – March 2025",
                "https://github.com/santunandi523",
                "https://github.com/santunandi523",
                "[\"Java 17\",\"Spring Boot 3\",\"Python\",\"FastAPI\",\"React 19\",\"PostgreSQL\",\"OpenCV\",\"PaddleOCR\",\"Docker\"]",
                "PackSure is an automated regulatory compliance verification suite auditing product labels against the statutory Legal Metrology (Packaged Commodities) Rules.",
                "Regulatory authorities spend millions manually inspecting physical packaging images for mandatory statutory declarations.",
                "Two-tier architecture: high-throughput Python FastAPI microservice with OpenCV and PaddleOCR connected to a deterministic Spring Boot 3 rules engine."
        ));
    }

    private void seedCertificates() {
        certificateRepository.save(new CertificateEntity(
                "cert-java-fullstack",
                "Full Stack Java Developer Professional Track",
                "Oracle / Infosys SpringBoard",
                "October 2024",
                "INFY-JAVA-FS-883921",
                "https://verify.infosys.com/credential/INFY-JAVA-FS-883921",
                "Java & Spring Boot",
                "[\"Java 17\",\"Spring Boot 3\",\"REST APIs\",\"Spring Data JPA\",\"Microservices Architecture\"]",
                true,
                true
        ));

        certificateRepository.save(new CertificateEntity(
                "cert-dsa-mastery",
                "Data Structures and Algorithms in Java: Masterclass",
                "Coding Ninjas & Algorithmic Excellence",
                "July 2024",
                "CN-DSA-JAVA-90142",
                "https://verify.codingninjas.com/certificate/CN-DSA-JAVA-90142",
                "Data Structures & Algorithms",
                "[\"Dynamic Programming\",\"Graph Algorithms\",\"Trees & BST\",\"Time Complexity\"]",
                true,
                true
        ));
    }
}

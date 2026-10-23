package com.santunandi.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "certificates")
public class CertificateEntity {

    @Id
    private String id;

    @Column(nullable = false)
    private String title;

    private String issuer;
    private String issueDate;
    private String credentialId;
    private String verificationUrl;
    private String category;

    @Column(length = 1000)
    private String skillsJson;

    private boolean isVerified;
    private boolean downloadAuthorized;

    public CertificateEntity() {}

    public CertificateEntity(String id, String title, String issuer, String issueDate,
                             String credentialId, String verificationUrl, String category,
                             String skillsJson, boolean isVerified, boolean downloadAuthorized) {
        this.id = id;
        this.title = title;
        this.issuer = issuer;
        this.issueDate = issueDate;
        this.credentialId = credentialId;
        this.verificationUrl = verificationUrl;
        this.category = category;
        this.skillsJson = skillsJson;
        this.isVerified = isVerified;
        this.downloadAuthorized = downloadAuthorized;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getIssuer() { return issuer; }
    public void setIssuer(String issuer) { this.issuer = issuer; }

    public String getIssueDate() { return issueDate; }
    public void setIssueDate(String issueDate) { this.issueDate = issueDate; }

    public String getCredentialId() { return credentialId; }
    public void setCredentialId(String credentialId) { this.credentialId = credentialId; }

    public String getVerificationUrl() { return verificationUrl; }
    public void setVerificationUrl(String verificationUrl) { this.verificationUrl = verificationUrl; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getSkillsJson() { return skillsJson; }
    public void setSkillsJson(String skillsJson) { this.skillsJson = skillsJson; }

    public boolean isVerified() { return isVerified; }
    public void setVerified(boolean verified) { isVerified = verified; }

    public boolean isDownloadAuthorized() { return downloadAuthorized; }
    public void setDownloadAuthorized(boolean downloadAuthorized) { this.downloadAuthorized = downloadAuthorized; }
}

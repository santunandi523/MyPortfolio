package com.santunandi.portfolio.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "academic_records")
public class AcademicRecordEntity {

    @Id
    private String id;

    private String level; // class10, class12, university
    private String title;
    private String institution;
    private String boardOrUniversity;
    private String scoreLabel;
    private String scoreValue;
    private String passingYear;
    private String highlightsJson;

    private String documentTitle;
    private String documentType;
    private String documentSize;

    private DocumentVisibility visibility; // PUBLIC, REDACTED, PRIVATE

    private boolean isVerified;
    private String verificationHash;
    private String issueDate;
    private String storageFilePath;
    private boolean downloadAuthorized;

    public enum DocumentVisibility {
        PUBLIC, REDACTED, PRIVATE
    }

    public AcademicRecordEntity() {}

    public AcademicRecordEntity(String id, String level, String title, String institution,
                                String boardOrUniversity, String scoreLabel, String scoreValue,
                                String passingYear, String highlightsJson, String documentTitle,
                                String documentType, String documentSize, DocumentVisibility visibility,
                                boolean isVerified, String verificationHash, String issueDate,
                                boolean downloadAuthorized) {
        this.id = id;
        this.level = level;
        this.title = title;
        this.institution = institution;
        this.boardOrUniversity = boardOrUniversity;
        this.scoreLabel = scoreLabel;
        this.scoreValue = scoreValue;
        this.passingYear = passingYear;
        this.highlightsJson = highlightsJson;
        this.documentTitle = documentTitle;
        this.documentType = documentType;
        this.documentSize = documentSize;
        this.visibility = visibility;
        this.isVerified = isVerified;
        this.verificationHash = verificationHash;
        this.issueDate = issueDate;
        this.downloadAuthorized = downloadAuthorized;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getLevel() { return level; }
    public void setLevel(String level) { this.level = level; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }

    public String getBoardOrUniversity() { return boardOrUniversity; }
    public void setBoardOrUniversity(String boardOrUniversity) { this.boardOrUniversity = boardOrUniversity; }

    public String getScoreLabel() { return scoreLabel; }
    public void setScoreLabel(String scoreLabel) { this.scoreLabel = scoreLabel; }

    public String getScoreValue() { return scoreValue; }
    public void setScoreValue(String scoreValue) { this.scoreValue = scoreValue; }

    public String getPassingYear() { return passingYear; }
    public void setPassingYear(String passingYear) { this.passingYear = passingYear; }

    public String getHighlightsJson() { return highlightsJson; }
    public void setHighlightsJson(String highlightsJson) { this.highlightsJson = highlightsJson; }

    public String getDocumentTitle() { return documentTitle; }
    public void setDocumentTitle(String documentTitle) { this.documentTitle = documentTitle; }

    public String getDocumentType() { return documentType; }
    public void setDocumentType(String documentType) { this.documentType = documentType; }

    public String getDocumentSize() { return documentSize; }
    public void setDocumentSize(String documentSize) { this.documentSize = documentSize; }

    public DocumentVisibility getVisibility() { return visibility; }
    public void setVisibility(DocumentVisibility visibility) { this.visibility = visibility; }

    public boolean isVerified() { return isVerified; }
    public void setVerified(boolean verified) { isVerified = verified; }

    public String getVerificationHash() { return verificationHash; }
    public void setVerificationHash(String verificationHash) { this.verificationHash = verificationHash; }

    public String getIssueDate() { return issueDate; }
    public void setIssueDate(String issueDate) { this.issueDate = issueDate; }

    public String getStorageFilePath() { return storageFilePath; }
    public void setStorageFilePath(String storageFilePath) { this.storageFilePath = storageFilePath; }

    public boolean isDownloadAuthorized() { return downloadAuthorized; }
    public void setDownloadAuthorized(boolean downloadAuthorized) { this.downloadAuthorized = downloadAuthorized; }
}

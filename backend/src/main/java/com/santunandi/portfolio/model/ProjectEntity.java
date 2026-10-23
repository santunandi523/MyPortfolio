package com.santunandi.portfolio.model;

import jakarta.persistence.*;

@Entity
@Table(name = "projects")
public class ProjectEntity {

    @Id
    private String id;

    @Column(unique = true, nullable = false)
    private String slug;

    @Column(nullable = false)
    private String title;

    private String tagline;
    private boolean featured;
    private String category;
    private String status;
    private String role;
    private String duration;
    private String githubUrl;
    private String liveUrl;

    @Column(length = 1500)
    private String technologiesJson;

    @Column(length = 3000)
    private String overview;

    @Column(length = 3000)
    private String problemStatement;

    @Column(length = 3000)
    private String solution;

    public ProjectEntity() {}

    public ProjectEntity(String id, String slug, String title, String tagline, boolean featured,
                         String category, String status, String role, String duration,
                         String githubUrl, String liveUrl, String technologiesJson,
                         String overview, String problemStatement, String solution) {
        this.id = id;
        this.slug = slug;
        this.title = title;
        this.tagline = tagline;
        this.featured = featured;
        this.category = category;
        this.status = status;
        this.role = role;
        this.duration = duration;
        this.githubUrl = githubUrl;
        this.liveUrl = liveUrl;
        this.technologiesJson = technologiesJson;
        this.overview = overview;
        this.problemStatement = problemStatement;
        this.solution = solution;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getSlug() { return slug; }
    public void setSlug(String slug) { this.slug = slug; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getTagline() { return tagline; }
    public void setTagline(String tagline) { this.tagline = tagline; }

    public boolean isFeatured() { return featured; }
    public void setFeatured(boolean featured) { this.featured = featured; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }

    public String getGithubUrl() { return githubUrl; }
    public void setGithubUrl(String githubUrl) { this.githubUrl = githubUrl; }

    public String getLiveUrl() { return liveUrl; }
    public void setLiveUrl(String liveUrl) { this.liveUrl = liveUrl; }

    public String getTechnologiesJson() { return technologiesJson; }
    public void setTechnologiesJson(String technologiesJson) { this.technologiesJson = technologiesJson; }

    public String getOverview() { return overview; }
    public void setOverview(String overview) { this.overview = overview; }

    public String getProblemStatement() { return problemStatement; }
    public void setProblemStatement(String problemStatement) { this.problemStatement = problemStatement; }

    public String getSolution() { return solution; }
    public void setSolution(String solution) { this.solution = solution; }
}

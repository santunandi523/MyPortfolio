package com.santunandi.portfolio.repository;

import com.santunandi.portfolio.model.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity, String> {
    Optional<ProjectEntity> findBySlug(String slug);
    List<ProjectEntity> findByFeaturedTrue();
}

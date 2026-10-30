package com.santunandi.portfolio.repository;

import com.santunandi.portfolio.model.ProjectEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface ProjectRepository extends MongoRepository<ProjectEntity, String> {
    Optional<ProjectEntity> findBySlug(String slug);
    List<ProjectEntity> findByFeaturedTrue();
}

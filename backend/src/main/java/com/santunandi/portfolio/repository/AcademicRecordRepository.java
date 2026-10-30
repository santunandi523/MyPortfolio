package com.santunandi.portfolio.repository;

import com.santunandi.portfolio.model.AcademicRecordEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AcademicRecordRepository extends MongoRepository<AcademicRecordEntity, String> {
    List<AcademicRecordEntity> findByVisibility(AcademicRecordEntity.DocumentVisibility visibility);
    List<AcademicRecordEntity> findByLevel(String level);
}

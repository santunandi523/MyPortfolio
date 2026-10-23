package com.santunandi.portfolio.repository;

import com.santunandi.portfolio.model.AcademicRecordEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AcademicRecordRepository extends JpaRepository<AcademicRecordEntity, String> {
    List<AcademicRecordEntity> findByVisibility(AcademicRecordEntity.DocumentVisibility visibility);
    List<AcademicRecordEntity> findByLevel(String level);
}

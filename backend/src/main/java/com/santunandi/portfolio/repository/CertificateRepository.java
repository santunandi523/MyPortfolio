package com.santunandi.portfolio.repository;

import com.santunandi.portfolio.model.CertificateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CertificateRepository extends JpaRepository<CertificateEntity, String> {
    List<CertificateEntity> findByCategory(String category);
}

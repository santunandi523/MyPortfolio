package com.santunandi.portfolio.repository;

import com.santunandi.portfolio.model.CertificateEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CertificateRepository extends MongoRepository<CertificateEntity, String> {
    List<CertificateEntity> findByCategory(String category);
}

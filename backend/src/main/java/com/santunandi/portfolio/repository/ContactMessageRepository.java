package com.santunandi.portfolio.repository;

import com.santunandi.portfolio.model.ContactMessageEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactMessageRepository extends MongoRepository<ContactMessageEntity, String> {
    List<ContactMessageEntity> findAllByOrderByCreatedAtDesc();
}

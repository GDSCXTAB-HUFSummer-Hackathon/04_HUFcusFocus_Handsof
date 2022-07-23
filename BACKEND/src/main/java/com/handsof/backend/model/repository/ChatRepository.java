package com.handsof.backend.model.repository;

import com.handsof.backend.domain.entity.Slack;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

import java.util.List;

@Repository
public interface ChatRepository extends ReactiveMongoRepository<Slack, String> {
    public Flux<Slack> findAllByUserId(ObjectId objectId);
}

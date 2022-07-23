package com.handsof.backend.config;

import com.mongodb.*;
import com.mongodb.reactivestreams.client.MongoClient;
import com.mongodb.reactivestreams.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;

@Configuration
public class ReactiveMongoConfig {

    @Value("${spring.data.mongodb.uri}")
    private String uri;

    @Value("${spring.data.mongodb.database}")
    private String database;

    @Bean
    public MongoClient reactivMongoClient() {
        System.out.println("Creating mongo client");
        return MongoClients.create(createMongoClientSettings());
    }

    @Bean
    public ReactiveMongoTemplate reactiveMongoTemplate() {
        System.out.println("Creating mongo reactiveMongoTemplate");
        return new ReactiveMongoTemplate(reactivMongoClient(), database);
    }

    private MongoClientSettings createMongoClientSettings() {
        System.out.println("Creating mongo client "+uri);
        ConnectionString connectionString = new ConnectionString(uri);
        MongoClientSettings mongoClientSettings = MongoClientSettings.builder()
                .readConcern(ReadConcern.DEFAULT)
                .writeConcern(WriteConcern.MAJORITY)
                .readPreference(ReadPreference.primary())
                .applyConnectionString(connectionString)
                .build();
        return mongoClientSettings;
    }
}

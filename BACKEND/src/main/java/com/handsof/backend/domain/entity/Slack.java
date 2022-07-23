package com.handsof.backend.domain.entity;

import lombok.Builder;
import lombok.Getter;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Getter
public class Slack {
    protected Slack(){};
    private ObjectId userId;
    private Workspace workspace;
    private Destination destination;
    private String message;
    private Date createdAt;

    @Builder
    public Slack(ObjectId userId, Workspace workspace, Destination destination, String message, Date createdAt) {
        this.userId = userId;
        this.workspace = workspace;
        this.destination = destination;
        this.message = message;
        this.createdAt = createdAt;
    }
}

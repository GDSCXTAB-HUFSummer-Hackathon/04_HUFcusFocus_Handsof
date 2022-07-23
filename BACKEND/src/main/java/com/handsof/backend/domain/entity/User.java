package com.handsof.backend.domain.entity;

import lombok.Builder;
import lombok.Getter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@Getter
public class User {
    protected User(){};

    @Id
    private String _id;
    private String name;
    private String email;
    private String password;
    private List<Workspace> slack;

    @Builder
    public User(String name, String email, String password, List<Workspace> slack) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.slack = slack;
    }
}

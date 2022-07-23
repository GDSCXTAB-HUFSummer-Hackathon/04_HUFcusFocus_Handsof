package com.handsof.backend.domain.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class SlackDto {
    private int id;
//    private String destinationName;
    private String message;
    private Date createdAt;
//    private String worspaceName;
//    private String workspaceId;
}

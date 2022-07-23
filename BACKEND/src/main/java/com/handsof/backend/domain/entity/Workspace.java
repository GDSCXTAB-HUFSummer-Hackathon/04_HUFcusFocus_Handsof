package com.handsof.backend.domain.entity;

import lombok.Builder;
import lombok.Getter;

@Getter
public class Workspace {
    private String userAccessToken;
    private String workspaceId;
    private String workspaceName;

    @Builder
    public Workspace(String userAccessToken, String workspaceId, String workspaceName) {
        this.userAccessToken = userAccessToken;
        this.workspaceId = workspaceId;
        this.workspaceName = workspaceName;
    }
}

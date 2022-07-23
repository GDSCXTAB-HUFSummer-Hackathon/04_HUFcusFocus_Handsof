package com.handsof.backend.domain.entity;

import lombok.Builder;
import lombok.Getter;

@Getter
public class Destination {
    private String destinationId;
    private String destinationName;

    @Builder
    public Destination(String destinationId, String destinationName) {
        this.destinationId = destinationId;
        this.destinationName = destinationName;
    }
}

package com.handsof.backend.model.service;

import com.handsof.backend.domain.dto.SlackDto;
import com.handsof.backend.domain.entity.Slack;
import org.bson.types.ObjectId;

import java.util.List;

public interface ChatService {
//    public List<SlackDto> findAllByUserId(String userId);
    public List<Slack> findAll();
    public List<SlackDto> findAllByUserId(ObjectId userId);
}

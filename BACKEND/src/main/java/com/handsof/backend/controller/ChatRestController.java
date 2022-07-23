package com.handsof.backend.controller;

import com.handsof.backend.domain.dto.SlackDto;
import com.handsof.backend.domain.entity.Slack;
import com.handsof.backend.model.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ChatRestController {
    private final ChatService chatService;

    @GetMapping("/chat/slack/{userId}")
    public List<SlackDto> chatSlack(@PathVariable ObjectId userId) {
        return chatService.findAllByUserId(userId);
    }

    @GetMapping("/chat/slack")
    public List<Slack> chatSlack() {
        return chatService.findAll();
    }
}

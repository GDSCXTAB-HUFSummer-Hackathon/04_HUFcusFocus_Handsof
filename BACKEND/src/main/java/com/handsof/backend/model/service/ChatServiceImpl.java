package com.handsof.backend.model.service;

import com.handsof.backend.domain.dto.SlackDto;
import com.handsof.backend.domain.entity.Slack;
import com.handsof.backend.model.repository.ChatRepository;
import lombok.RequiredArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.ReactiveMongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChatServiceImpl implements ChatService {

    private final ReactiveMongoTemplate mongoTemplate;
    private final ChatRepository chatRepository;

    @Override
    public List<SlackDto> findAllByUserId(ObjectId userId) {
        Criteria criteria = new Criteria("userId");
        criteria.is(userId);

        Query query = new Query(criteria);

        Flux<Slack> slackFlux = mongoTemplate.find(query, Slack.class);
        List<Slack> slacks = slackFlux.toStream().collect(Collectors.toList());

        List<SlackDto> slackDtos = new ArrayList<>();
        int i = 1;
        for (Slack slack : slacks) {
            SlackDto slackDto = new SlackDto();
            slackDto.setId(i);
            slackDto.setMessage(slack.getMessage());
            slackDto.setCreatedAt(slack.getCreatedAt());
            slackDtos.add(slackDto);
            i++;
        }
        return slackDtos;
    }

    @Override
    public List<Slack> findAll() {
        Flux<Slack> slackFlux = chatRepository.findAll();
        return slackFlux.toStream().collect(Collectors.toList());
    }
}

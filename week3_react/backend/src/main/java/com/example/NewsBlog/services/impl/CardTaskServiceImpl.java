package com.example.NewsBlog.services.impl;

import com.example.NewsBlog.entities.CardTask;
import com.example.NewsBlog.repositories.CardRepository;
import com.example.NewsBlog.repositories.CardTaskRepository;
import com.example.NewsBlog.services.CardTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardTaskServiceImpl implements CardTaskService {
    @Autowired
    private CardTaskRepository cardTaskRepository;

    @Override
    public List<CardTask> getCardTasksByCard(Long id) {
        return cardTaskRepository.findAllByCardId(id);
    }
}

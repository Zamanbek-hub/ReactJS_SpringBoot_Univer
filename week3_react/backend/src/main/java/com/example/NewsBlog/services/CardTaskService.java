package com.example.NewsBlog.services;

import com.example.NewsBlog.entities.CardTask;

import java.util.List;

public interface CardTaskService {
    List<CardTask> getCardTasksByCard(Long id);
}

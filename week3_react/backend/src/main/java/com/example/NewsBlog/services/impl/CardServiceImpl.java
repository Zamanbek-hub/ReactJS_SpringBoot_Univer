package com.example.NewsBlog.services.impl;

import com.example.NewsBlog.repositories.CardRepository;
import com.example.NewsBlog.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CardServiceImpl implements CardService {
    @Autowired
    private CardRepository cardRepository;

}

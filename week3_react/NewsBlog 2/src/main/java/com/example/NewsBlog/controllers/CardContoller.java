package com.example.NewsBlog.controllers;

import com.example.NewsBlog.entities.Card;
import com.example.NewsBlog.repositories.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping(value = "/cards")
public class CardContoller {

    @Autowired
    private CardRepository cardRepository;

    @GetMapping("/cards")
    public List<Card> getCards(){
        return cardRepository.findAll();
    }
}

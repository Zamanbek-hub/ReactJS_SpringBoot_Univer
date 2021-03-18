package week_5_react.jwtauth.backend.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import week_5_react.jwtauth.backend.repositories.CardRepository;
import week_5_react.jwtauth.backend.services.CardService;

@Service
public class CardServiceImpl implements CardService {
    @Autowired
    private CardRepository cardRepository;
}

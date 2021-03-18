package week_5_react.jwtauth.backend.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import week_5_react.jwtauth.backend.entities.CardTask;
import week_5_react.jwtauth.backend.repositories.CardTaskRepository;
import week_5_react.jwtauth.backend.services.CardTaskService;

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

package week_5_react.jwtauth.backend.services;

import week_5_react.jwtauth.backend.entities.CardTask;
import java.util.List;

public interface CardTaskService {
    List<CardTask> getCardTasksByCard(Long id);
}

package quest.questDemo.services;

import quest.questDemo.entities.Answer;
import quest.questDemo.entities.Tasks;
import quest.questDemo.entities.Users;

import java.util.List;

public interface AnswerService {
    Answer save(Answer answer);
    List<Answer> findAll();
    List<Answer> findAllByOrderByIdDesc();
    Answer findByTasksAndUsersAndCorrect(Tasks tasks, Users users);
}

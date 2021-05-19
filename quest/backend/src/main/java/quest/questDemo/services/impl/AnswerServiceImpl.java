package quest.questDemo.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quest.questDemo.entities.Answer;
import quest.questDemo.entities.Tasks;
import quest.questDemo.entities.Users;
import quest.questDemo.repositories.AnswerRepository;
import quest.questDemo.repositories.QuestRepository;
import quest.questDemo.services.AnswerService;

import java.util.List;

@Service
public class AnswerServiceImpl implements AnswerService {
    @Autowired
    private AnswerRepository answerRepository;

    @Override
    public List<Answer> findAll() {
        return answerRepository.findAll();
    }

    @Override
    public List<Answer> findAllByOrderByIdDesc() {
        return answerRepository.findAllByOrderByIdDesc();
    }


    @Override
    public Answer save(Answer answer) {
        return answerRepository.save(answer);
    }

    @Override
    public Answer findByTasksAndUsersAndCorrect(Tasks tasks, Users users) {
        return answerRepository.findByTasksAndUsersAndCorrectTrue(tasks, users);
    }
}

package quest.questDemo.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quest.questDemo.entities.Quest;
import quest.questDemo.entities.Tasks;
import quest.questDemo.repositories.TaskRepository;
import quest.questDemo.services.TaskService;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {
    @Autowired
    private TaskRepository taskRepository;

    @Override
    public Tasks save(Tasks task) {
        return taskRepository.save(task);
    }

    @Override
    public Tasks findById(Long id) {
        return taskRepository.findById(id).get();
    }

    @Override
    public List<Tasks> findAllByQuest(Quest quest) {
        return taskRepository.findAllByQuest(quest);
    }

    @Override
    public List<Tasks> findAll() {
        return taskRepository.findAll();
    }
}

package quest.questDemo.services;

import quest.questDemo.entities.Quest;
import quest.questDemo.entities.Tasks;

import java.util.List;

public interface TaskService {
    Tasks save(Tasks task);
    Tasks findById(Long id);
    List<Tasks> findAll();
    List<Tasks> findAllByQuest(Quest quest);
}

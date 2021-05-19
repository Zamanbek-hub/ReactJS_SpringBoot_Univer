package quest.questDemo.services;

import quest.questDemo.entities.Quest;

import java.util.List;

public interface QuestService {
    Quest save(Quest quest);
    Quest findById(Long id);
    List<Quest> findAll();

}

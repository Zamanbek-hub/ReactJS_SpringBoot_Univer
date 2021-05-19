package quest.questDemo.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quest.questDemo.entities.Quest;
import quest.questDemo.repositories.QuestRepository;
import quest.questDemo.repositories.RolesRepository;
import quest.questDemo.services.QuestService;

import java.util.List;

@Service
public class QuestServiceImpl implements QuestService {
    @Autowired
    private QuestRepository questRepository;

    @Override
    public Quest findById(Long id) {
        return questRepository.findById(id).get();
    }

    @Override
    public List<Quest> findAll() {
        return questRepository.findAll();
    }

    @Override
    public Quest save(Quest quest) {
        return questRepository.save(quest);
    }
}

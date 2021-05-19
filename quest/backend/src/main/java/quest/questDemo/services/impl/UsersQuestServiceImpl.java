package quest.questDemo.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quest.questDemo.entities.Users;
import quest.questDemo.entities.UsersQuest;
import quest.questDemo.repositories.UserRepository;
import quest.questDemo.repositories.UsersQuestRepository;
import quest.questDemo.services.UsersQuestService;

import java.util.List;

@Service
public class UsersQuestServiceImpl implements UsersQuestService {
    @Autowired
    private UsersQuestRepository usersQuestRepository;

    @Override
    public UsersQuest save(UsersQuest usersQuest) {
        return usersQuestRepository.save(usersQuest);
    }

    @Override
    public List<UsersQuest> findAllByUsers(Users users) {
        return usersQuestRepository.findAllByUsers(users);
    }

    @Override
    public List<UsersQuest> findAll() {
        return usersQuestRepository.findAll();
    }
}

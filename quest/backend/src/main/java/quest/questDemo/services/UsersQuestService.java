package quest.questDemo.services;

import org.springframework.security.core.userdetails.User;
import quest.questDemo.entities.Users;
import quest.questDemo.entities.UsersQuest;
import java.util.List;

public interface UsersQuestService {
    List<UsersQuest> findAll();
    UsersQuest save(UsersQuest usersQuest);
    List<UsersQuest> findAllByUsers(Users users);
}

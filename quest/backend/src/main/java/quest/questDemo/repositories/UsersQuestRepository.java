package quest.questDemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import quest.questDemo.entities.Users;
import quest.questDemo.entities.UsersQuest;

import java.util.List;

@Repository
@Transactional
public interface UsersQuestRepository extends JpaRepository<UsersQuest, Long> {
    List<UsersQuest> findAllByUsers(Users users);
}

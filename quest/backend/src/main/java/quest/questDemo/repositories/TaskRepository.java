package quest.questDemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import quest.questDemo.entities.Quest;
import quest.questDemo.entities.Roles;
import quest.questDemo.entities.Tasks;

import java.util.List;

@Repository
@Transactional
public interface TaskRepository extends JpaRepository<Tasks, Long> {
    List<Tasks> findAllByQuest(Quest quest);
}

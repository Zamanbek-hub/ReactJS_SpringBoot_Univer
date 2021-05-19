package quest.questDemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import quest.questDemo.entities.Answer;
import quest.questDemo.entities.Quest;
import quest.questDemo.entities.Tasks;
import quest.questDemo.entities.Users;

import java.util.List;

@Repository
@Transactional
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Answer findByTasksAndUsersAndCorrectTrue(Tasks tasks, Users users);
    List<Answer> findAllByOrderByIdDesc();
}

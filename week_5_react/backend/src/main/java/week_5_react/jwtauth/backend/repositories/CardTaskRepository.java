package week_5_react.jwtauth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import week_5_react.jwtauth.backend.entities.CardTask;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface CardTaskRepository extends JpaRepository<CardTask, Long> {
    List<CardTask> findAllByCardId(Long id);
    void removeAllByCardId(Long id);
}

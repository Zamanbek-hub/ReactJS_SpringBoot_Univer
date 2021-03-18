package week_5_react.jwtauth.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import week_5_react.jwtauth.backend.entities.Card;

import javax.transaction.Transactional;

import java.util.List;

@Repository
@Transactional
public interface CardRepository extends JpaRepository<Card, Long> {
    void removeById(Long id);
    List<Card> findAllByNameContains(String name);
}

package com.example.NewsBlog.repositories;

import com.example.NewsBlog.entities.Card;
import com.example.NewsBlog.entities.CardTask;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface CardTaskRepository extends JpaRepository<CardTask, Long> {
    List<CardTask> findAllByCardId(Long id);
    void removeAllByCardId(Long id);
}

package quest.questDemo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import quest.questDemo.entities.Roles;

@Repository
@Transactional
public interface RolesRepository extends JpaRepository<Roles, Long> {
    Roles findByRole(String role);
}

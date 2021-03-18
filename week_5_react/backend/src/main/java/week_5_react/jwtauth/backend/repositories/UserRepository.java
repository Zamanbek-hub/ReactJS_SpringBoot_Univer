package week_5_react.jwtauth.backend.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import week_5_react.jwtauth.backend.entities.Users;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<Users, Long>{
    Users findByEmail(String email);
}

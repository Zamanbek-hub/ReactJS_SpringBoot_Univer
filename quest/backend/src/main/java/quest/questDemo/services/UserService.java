package quest.questDemo.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import quest.questDemo.entities.Users;

import java.util.List;

public interface UserService extends UserDetailsService {
    Users saveUser(Users users);
    Users findByEmail(String email);
    Users findById(Long id);
    List<Users> findAll();
}

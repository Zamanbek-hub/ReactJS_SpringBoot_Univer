package week_5_react.jwtauth.backend.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import week_5_react.jwtauth.backend.entities.Users;

public interface  UserService extends UserDetailsService{
    Users saveUser(Users users);
    Users findByEmail(String email);
}

package quest.questDemo.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import quest.questDemo.entities.Users;
import quest.questDemo.repositories.UserRepository;
import quest.questDemo.services.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public Users saveUser(Users users) {
        return userRepository.save(users);
    }

    @Override
    public Users findById(Long id) {
        return userRepository.findById(id).get();
    }

    @Override
    public List<Users> findAll() {
        return userRepository.findAll();
    }

    @Override
    public Users findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(s);
        if(user!=null){
            return user;
        }else{
            throw new UsernameNotFoundException("USER NOT FOUND");
        }
    }
}

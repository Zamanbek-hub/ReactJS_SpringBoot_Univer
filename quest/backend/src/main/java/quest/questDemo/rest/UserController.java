package quest.questDemo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import quest.questDemo.entities.Roles;
import quest.questDemo.entities.Users;
import quest.questDemo.entities.helpers.UserRequest;
import quest.questDemo.services.RolesService;
import quest.questDemo.services.UserService;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private UserService userService;

    @Autowired
    private RolesService rolesService;

    @PostMapping("/register")
    public Users registerUser(@RequestBody UserRequest userRequest){
        Users checkUser = userService.findByEmail(userRequest.getEmail());
        if(checkUser == null){
            Roles role = rolesService.getRole("ROLE_USER");
            if(role != null && userRequest.getPassword() .equals(userRequest.getRe_password())){
                ArrayList<Roles> roles = new ArrayList<>();
                roles.add(role);
                Users user = new Users(
                        userRequest.getEmail(),
                        userRequest.getPassword(),
                        userRequest.getFull_name(),
                        roles
                );

                user.setRoles(roles);
                user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
                return userService.saveUser(user);
            }
        }
        return null;
    }


    @PostMapping(value = "/update_profile")
    public Users updateProfile(@RequestBody UserRequest userRequest){
        Users user = userService.findByEmail(userRequest.getEmail());
        if(user!=null){
            user.setFull_name(userRequest.getFull_name());
            return userService.saveUser(user);
        }
        return null;
    }

    @PostMapping(value = "/update_password")
    public Users updatePassword(@RequestBody UserRequest userRequest){
        Users user = userService.findByEmail(userRequest.getEmail());
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String error = "Incorrect old password";

        if(user!=null){
//            if(encoder.matches(userRequest.getPassword(),user.getPassword())){
            error = "Password confirmation doesn't match with new password";

            if(userRequest.getPassword().equals(userRequest.getRe_password())){
                error="Successfully updated";
                user.setPassword(encoder.encode(userRequest.getPassword()));
                return userService.saveUser(user);
            }
//            }
        }
        return null;
    }

    @GetMapping(value = "/profile")
    public Users profilePage(){
        return getUser();
    }


    @GetMapping(value = "/get_user")
    public Users getUser(@RequestParam("id") Long id){
        return userService.findById(id);
    }

    private Users getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(!(authentication instanceof AnonymousAuthenticationToken)){
            Users user = (Users) authentication.getPrincipal();
            return user;
        }
        return null;
    }

}

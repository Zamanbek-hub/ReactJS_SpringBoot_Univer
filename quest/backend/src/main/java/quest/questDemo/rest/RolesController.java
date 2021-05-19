package quest.questDemo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import quest.questDemo.entities.Roles;
import quest.questDemo.entities.Users;
import quest.questDemo.services.RolesService;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/roles")
public class RolesController {
    @Autowired
    private RolesService rolesService;

    @GetMapping(value = "/have_role")
    public boolean haveRole(@RequestParam("role") String role_in) {
        Roles role = rolesService.getRole(role_in);

        Users user = getUser();
        assert user != null;
        List<Roles> user_roles = user.getRoles();

        if (user_roles.contains(role)) {
            return true;
        } else {
            return false;
        }
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

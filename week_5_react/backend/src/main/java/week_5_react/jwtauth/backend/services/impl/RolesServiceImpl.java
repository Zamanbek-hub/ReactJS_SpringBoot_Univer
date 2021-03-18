package week_5_react.jwtauth.backend.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import week_5_react.jwtauth.backend.entities.Roles;
import week_5_react.jwtauth.backend.repositories.CardRepository;
import week_5_react.jwtauth.backend.repositories.RolesRepository;
import week_5_react.jwtauth.backend.services.RolesService;

import java.util.List;

@Service
public class RolesServiceImpl implements RolesService {
    @Autowired
    private RolesRepository rolesRepository;

    @Override
    public Roles getRole(String role) {
        return rolesRepository.findByRole(role);
    }
}

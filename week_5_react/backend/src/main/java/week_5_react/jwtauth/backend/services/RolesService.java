package week_5_react.jwtauth.backend.services;

import week_5_react.jwtauth.backend.entities.CardTask;
import week_5_react.jwtauth.backend.entities.Roles;

import java.util.List;

public interface RolesService {
    Roles getRole(String role);
}

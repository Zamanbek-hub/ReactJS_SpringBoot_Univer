package quest.questDemo.services;

import quest.questDemo.entities.Roles;

import java.util.List;

public interface RolesService {
    Roles getRole(String role);
    Roles findById(Long id);
    List<Roles> findAll();
}

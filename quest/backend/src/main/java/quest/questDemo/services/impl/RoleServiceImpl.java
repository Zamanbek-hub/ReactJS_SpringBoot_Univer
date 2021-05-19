package quest.questDemo.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import quest.questDemo.entities.Roles;
import quest.questDemo.repositories.RolesRepository;
import quest.questDemo.services.RolesService;

import java.util.List;

@Service
public class RoleServiceImpl implements RolesService {
    @Autowired
    private RolesRepository rolesRepository;

    @Override
    public Roles findById(Long id) {
        return rolesRepository.findById(id).get();
    }

    @Override
    public Roles getRole(String role) {
        return rolesRepository.findByRole(role);
    }

    @Override
    public List<Roles> findAll() {
        return rolesRepository.findAll();
    }
}

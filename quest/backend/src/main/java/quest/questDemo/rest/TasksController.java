package quest.questDemo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import quest.questDemo.entities.Quest;
import quest.questDemo.entities.Roles;
import quest.questDemo.entities.Tasks;
import quest.questDemo.entities.Users;
import quest.questDemo.services.QuestService;
import quest.questDemo.services.RolesService;
import quest.questDemo.services.TaskService;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/tasks")
public class TasksController {
    @Autowired
    private QuestService questService;

    @Autowired
    private TaskService taskService;

    @PostMapping(value = "/create")
    public Tasks create(@RequestBody Tasks task) {
        return taskService.save(task);
    }

    @GetMapping(value = "/quest_tasks")
    public List<Tasks> getAll(@RequestParam("quest_id") Long quest_id) {
        Quest quest = questService.findById(quest_id);
        return taskService.findAllByQuest(quest);
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

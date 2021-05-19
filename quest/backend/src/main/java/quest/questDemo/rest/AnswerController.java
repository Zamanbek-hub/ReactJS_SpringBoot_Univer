package quest.questDemo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.config.Task;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import quest.questDemo.entities.*;
import quest.questDemo.services.AnswerService;
import quest.questDemo.services.QuestService;
import quest.questDemo.services.TaskService;

import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/answer")
public class AnswerController {
    @Autowired
    private AnswerService answerService;

    @Autowired
    private QuestService questService;

    @Autowired
    private TaskService taskService;

    @PostMapping("/save")
    public Answer saveAnswer(@RequestBody Map<String, String> data){
        Users user = getUser();
        String answer_str = data.get("answer");
        Tasks task = taskService.findById(Long.parseLong(data.get("task_id")));

        Answer answer = new Answer();
        answer.setAnswer(answer_str);
        answer.setUsers(user);
        answer.setTasks(task);
        answer.setCorrect(answer_str.toLowerCase().equals(task.getAnswer().toLowerCase()));

        return answerService.save(answer);
    }

    @GetMapping("/get")
    public Answer all(@RequestParam("task_id") Long task_id){
        Users user = getUser();
        Tasks task = taskService.findById(task_id);
        Answer answer = answerService.findByTasksAndUsersAndCorrect(task, user);
        return answer;
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

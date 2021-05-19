package quest.questDemo.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import quest.questDemo.entities.*;
import quest.questDemo.entities.helpers.UserRequest;
import quest.questDemo.services.*;

import java.util.*;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/quest")
public class QuestController {
    @Autowired
    private AnswerService answerService;

    @Autowired
    private TaskService taskService;

    @Autowired
    private QuestService questService;

    @Autowired
    private UsersQuestService usersQuestService;

    @Autowired
    private UserService userService;

    @PostMapping("/create")
    public Quest createQuest(@RequestBody Quest newQuest){
        Users user = getUser();
        Quest quest = questService.save(newQuest);

        UsersQuest usersQuest = new UsersQuest();
        usersQuest.setUsers(user);
        usersQuest.setQuest(quest);
        usersQuest.set_creator(true);
        usersQuest.setPoint(0);

        usersQuestService.save(usersQuest);

        return quest;
    }

    @PostMapping("/update")
    public Quest updateQuests(@RequestBody Quest quest2){
        Quest quest = questService.findById(quest2.getId());
        quest.set_seem(true);
        return questService.save(quest);
    }

    @GetMapping("/my_all")
    public List<Quest> getQuests(){
        Users user = getUser();
        assert user != null;

        List<UsersQuest> user_quests = usersQuestService.findAll();

        List<Quest> quests = new ArrayList<>();
        for(UsersQuest usersQuest: user_quests){
            if(user.getId().equals(usersQuest.getUsers().getId())){
                quests.add(usersQuest.getQuest());
            }
        }

        return quests;

    }

    @GetMapping("/all")
    public List<Quest> all(){
        List<Quest> quests = questService.findAll();
        List<Quest> quests2 = new ArrayList<>();

        Users user = getUser();
        List<UsersQuest> usersQuests = usersQuestService.findAllByUsers(user);

        for(Quest quest: quests){
            boolean is_not_my = true;
            for(UsersQuest usersQuest: usersQuests) {
                if (usersQuest.getQuest().getId().equals(quest.getId())) {
                    is_not_my = false;
                    break;
                }
            }

            if(quest.is_seem() && is_not_my){
                quests2.add(quest);
            }
        }

        return  quests2;
    }

    @GetMapping("/get")
    public Quest all(@RequestParam("id") Long id){
        return questService.findById(id);
    }

    @GetMapping("/favorites")
    public List<Users> favorites(@RequestParam("quest_id") Long id){
        Quest quest = questService.findById(id);
        List<Answer> answers = answerService.findAllByOrderByIdDesc();

        LinkedHashMap<Long, List<Answer>> map = new LinkedHashMap<Long, List<Answer>>();
        for(Answer answer: answers){
            Long user_id = answer.getUsers().getId();
            if(! map.containsKey(user_id)){
                map.put(user_id, new ArrayList<>());
            }

            if(answer.isCorrect()) {
                Tasks task = answer.getTasks();
                Quest task_quest = task.getQuest();
                if(task_quest.getId().equals(quest.getId())) {
                    List<Answer> user_answers = map.get(user_id);
                    user_answers.add(answer);
                    map.put(user_id, user_answers);
                }
            }
        }

        List<Tasks> quest_tasks = taskService.findAllByQuest(quest);

        List<Users> favorites = new ArrayList<>();
        Set<Long> keys = map.keySet();
        for (Long key : keys) {
            List<Answer> user_answer = map.get(key);
            if(user_answer.size() == quest_tasks.size()){
                Users fav_user = userService.findById(key);
                favorites.add(fav_user);
            }
        }

        Collections.reverse(favorites);
        return favorites;
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

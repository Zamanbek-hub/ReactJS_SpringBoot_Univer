package week_5_react.jwtauth.backend.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import week_5_react.jwtauth.backend.entities.Card;
import week_5_react.jwtauth.backend.entities.CardTask;
import week_5_react.jwtauth.backend.repositories.CardRepository;
import week_5_react.jwtauth.backend.repositories.CardTaskRepository;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@RestController
@RequestMapping(value = "/cards")
@CrossOrigin("*")
public class CardController {
    @Autowired
    private CardRepository cardRepository;

    @Autowired
    private CardTaskRepository cardTaskRepository;

    @GetMapping("")
    public List<Card> getCards(){
        return cardRepository.findAll();
    }

    @GetMapping("/card")
    public Optional<Card> getCard(@RequestParam("id") Long id){
        return cardRepository.findById(id);
    }

    @PostMapping("/addCard")
    public Card addCard(@RequestParam("name") String name) {
        Card newCard = new Card(name);
        newCard.setAddedDate(new Date());
        return cardRepository.save(newCard);
    }

    @PostMapping("/edit_card")
    public void editCard(@RequestBody Card editCard) {
        cardRepository.save(editCard);
    }

    @PostMapping("/remove_card")
    public void removeCard(@RequestBody Map<String, String> payload) {
        Long card_id = Long.parseLong(payload.get("card_id"));
        cardTaskRepository.removeAllByCardId(card_id);
        cardRepository.removeById(card_id);
    }

    @GetMapping("/get_cards_by_name_contains")
    public List<Card> getCardsByNameContains(@RequestParam("search") String search) {
        System.out.println("search = " + search);
        return cardRepository.findAllByNameContains(search);
    }

    @PostMapping("/add_card_task")
    public CardTask addCardTask(@RequestParam("card_id") Long card_id, @RequestBody CardTask newCardTask) {
        newCardTask.setCard(cardRepository.findById(card_id).get());
        return cardTaskRepository.save(newCardTask);
    }

    @PostMapping("/change_card_task_done_state")
    public CardTask changeCardTaskDoneState(@RequestBody Map<String, String> payload) {
        CardTask editCardTask = cardTaskRepository.findById(Long.parseLong(payload.get("id"))).get();
        editCardTask.setDone(Boolean.parseBoolean(payload.get("done")));

        return cardTaskRepository.save(editCardTask);
    }

    @GetMapping("/card_tasks")
    public List<CardTask> getCardTasks(@RequestParam("id") Long id){
        return cardTaskRepository.findAllByCardId(id);
    }
}

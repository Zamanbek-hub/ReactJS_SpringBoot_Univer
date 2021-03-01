package com.example.NewsBlog.controllers;

import com.example.NewsBlog.entities.Card;
import com.example.NewsBlog.entities.CardTask;
import com.example.NewsBlog.repositories.CardRepository;
import com.example.NewsBlog.repositories.CardTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
        System.out.println("edit_catd = " + editCard);
        cardRepository.save(editCard);
    }

    @PostMapping("/remove_card")
    public void removeCard(@RequestBody Map<String, String> payload) {
        System.out.println("payload =" + payload.get("card_id"));
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
        System.out.println("card_id = " + card_id);
        System.out.println(newCardTask);
        newCardTask.setCard(cardRepository.findById(card_id).get());
        return cardTaskRepository.save(newCardTask);
    }

    @PostMapping("/change_card_task_done_state")
    public CardTask changeCardTaskDoneState(@RequestBody Map<String, String> payload) {
        System.out.println("payload =" + payload.get("id"));
        System.out.println("done =" + Boolean.parseBoolean(payload.get("done")));
        CardTask editCardTask = cardTaskRepository.findById(Long.parseLong(payload.get("id"))).get();
        editCardTask.setDone(Boolean.parseBoolean(payload.get("done")));

        return cardTaskRepository.save(editCardTask);
    }

    @GetMapping("/card_tasks")
    public List<CardTask> getCardTasks(@RequestParam("id") Long id){
        return cardTaskRepository.findAllByCardId(id);
    }
}

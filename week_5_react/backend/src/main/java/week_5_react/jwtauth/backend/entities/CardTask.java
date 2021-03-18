package week_5_react.jwtauth.backend.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "cardstasks")
public class CardTask {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private Long id;


    @Column(name="name", length=500)
    private String taskText;

    @Column(name="addedDate")
    private  Date addedDate;

    @Column(name="done")
    private boolean done;

    @ManyToOne(fetch = FetchType.EAGER, optional=true, cascade=CascadeType.ALL)
    private Card card;

    public CardTask() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTaskText() {
        return taskText;
    }

    public void setTaskText(String taskText) {
        this.taskText = taskText;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    public boolean isDone() {
        return done;
    }

    public void setDone(boolean done) {
        this.done = done;
    }

    public Card getCard() {
        return card;
    }

    public void setCard(Card card) {
        this.card = card;
    }

    @Override
    public String toString() {
        return "CardTask{" +
                "id=" + id +
                ", taskText='" + taskText + '\'' +
                ", addedDate=" + addedDate +
                ", done=" + done +
                ", card=" + card +
                '}';
    }
}

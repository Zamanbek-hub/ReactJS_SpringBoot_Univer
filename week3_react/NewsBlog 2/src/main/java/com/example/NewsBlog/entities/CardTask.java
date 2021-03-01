package com.example.NewsBlog.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "cardstasks")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CardTask {
    public CardTask(String taskText) {
        this.taskText = taskText;
        this.done = false;
    }

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

    @ManyToOne(fetch = FetchType.EAGER)
    private Card card;


}

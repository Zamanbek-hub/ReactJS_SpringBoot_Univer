package quest.questDemo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "t_task_answers")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Answer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "answer", length = 1000)
    private String answer;

    @Column(name = "correct")
    private boolean correct;

    @ManyToOne(fetch = FetchType.EAGER)
    private Users users;

    @ManyToOne(fetch = FetchType.EAGER)
    private Tasks tasks;
}

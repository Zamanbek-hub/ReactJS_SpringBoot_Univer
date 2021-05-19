package quest.questDemo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users_quests")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UsersQuest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "is_creator")
    private boolean is_creator;

    @Column(name = "point")
    private int point;

    @ManyToOne(fetch = FetchType.EAGER)
    private Users users;

    @ManyToOne(fetch = FetchType.EAGER)
    private Quest quest;
}


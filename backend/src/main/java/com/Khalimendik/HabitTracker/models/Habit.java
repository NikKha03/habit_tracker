package com.Khalimendik.HabitTracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Entity
@Data
@Table(name = "habits")
public class Habit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long habitId;

    private String name;

    private String description;

    @ManyToOne()
    @JoinColumn(name = "user_id", nullable = false)
    @JsonIgnore()
    private User userId;


    //    @JsonIgnore()
    @ManyToOne()
    @JoinColumn(name = "repetition_id", nullable = false)
    private Repetition repetitionId;

    private int countExecutions;

    @OneToMany(mappedBy = "habitId")
    private List<PlannedExecutionTime> executionTime;

    @Column(nullable = false)
    private LocalDate startDate;

    @Column(nullable = false)
    private LocalDate endDate;

    @OneToMany(mappedBy = "habitId")
    private List<HabitStatistic> habitStatistics;

    public int getCountExecutions() {
        if (countExecutions == 0) {
            return 1;
        }
        return countExecutions;
    }

}

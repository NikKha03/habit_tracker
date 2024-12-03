package com.Khalimendik.HabitTracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "habit_statistic")
public class HabitStatistic {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long statisticId;

    @ManyToOne()
    @JoinColumn(name = "habit_id", nullable = false)
    @JsonIgnore()
    private Habit habitId;

    private LocalDate dueDate;

}

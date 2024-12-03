package com.Khalimendik.HabitTracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalTime;

@Entity
@Data
@Table(name = "planned_execution_time")
public class PlannedExecutionTime {

    @Id
    private Long executionTimeId;

    @ManyToOne
    @JoinColumn(name = "habit_id")
    @JsonIgnore
    private Habit habitId;

    private LocalTime time;

}

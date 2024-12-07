package com.Khalimendik.HabitTracker.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "repetition")
public class Repetition {

    @Id
    private Long repetitionId;

    private String value;

    @JsonIgnore()
    @OneToMany(mappedBy = "repetitionId")
    private List<Habit> habits;

}

//public enum Repetition {
//   on_the_day, on_the_week
//}


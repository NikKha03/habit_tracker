package com.Khalimendik.HabitTracker.DTO;

import com.Khalimendik.HabitTracker.models.Habit;
import com.Khalimendik.HabitTracker.models.PlannedExecutionTime;
import com.Khalimendik.HabitTracker.models.Repetition;
import com.Khalimendik.HabitTracker.models.User;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
public class HabitCreateRequest {

    private User userId;

    private Long habitId;

    private String name;

    private String description;

    private int countExecutions;

    private String repetitionValue;

    private Repetition repetitionId;

    private List<PlannedExecutionTime> PlannedExecutionTime;

    private LocalDate startDate;

    private LocalDate endDate;

}

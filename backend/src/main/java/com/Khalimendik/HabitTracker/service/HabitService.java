package com.Khalimendik.HabitTracker.service;

import com.Khalimendik.HabitTracker.DTO.HabitCreateRequest;
import com.Khalimendik.HabitTracker.models.Habit;
import com.Khalimendik.HabitTracker.models.User;

import java.util.List;

public interface HabitService {

    void createHabit(HabitCreateRequest habitCreateRequest);

    List<Habit> allHabits(User user);

    List<Habit> habitsOnTheDay(User user);

    List<Habit> habitsOnTheWeak(User user);

    void habitDue(Long habitId);

}

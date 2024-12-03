package com.Khalimendik.HabitTracker.Repo;

import com.Khalimendik.HabitTracker.models.Habit;
import com.Khalimendik.HabitTracker.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HabitRepo extends JpaRepository<Habit, Long> {

    List<Habit> findAllByUserId(User user);

    Habit findByHabitId(Long habitId);

}

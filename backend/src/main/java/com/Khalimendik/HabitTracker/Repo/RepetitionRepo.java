package com.Khalimendik.HabitTracker.Repo;

import com.Khalimendik.HabitTracker.models.Repetition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface RepetitionRepo extends JpaRepository<Repetition, Long> {

    Repetition findByValue(String value);

}

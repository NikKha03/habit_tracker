package com.Khalimendik.HabitTracker.Repo;

import com.Khalimendik.HabitTracker.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {

    User findUserByEmail(String email);

}

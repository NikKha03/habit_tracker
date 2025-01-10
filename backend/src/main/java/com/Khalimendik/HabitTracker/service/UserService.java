package com.Khalimendik.HabitTracker.service;

import com.Khalimendik.HabitTracker.DTO.UserRegRequest;
import com.Khalimendik.HabitTracker.models.User;

import java.util.List;

public interface UserService {

    void addUser(UserRegRequest userRegRequest);

    User findUser(String email);

    User findUser(Long id);

    List<User> findAllUsers();

    void deleteUser(Long userId);

}

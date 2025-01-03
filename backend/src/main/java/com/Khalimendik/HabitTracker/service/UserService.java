package com.Khalimendik.HabitTracker.service;

import com.Khalimendik.HabitTracker.DTO.UserRegRequest;
import com.Khalimendik.HabitTracker.models.User;

import java.util.List;

public interface UserService {

    void addUser(UserRegRequest userRegRequest);

    User findUser(String email);

    List<User> findAllUsers();

}

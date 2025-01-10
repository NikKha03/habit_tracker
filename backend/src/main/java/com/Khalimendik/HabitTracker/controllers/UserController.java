package com.Khalimendik.HabitTracker.controllers;

import com.Khalimendik.HabitTracker.DTO.UserRegRequest;
import com.Khalimendik.HabitTracker.models.User;
import com.Khalimendik.HabitTracker.service.UserService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final JdbcTemplate jdbcTemplate;

    private final UserService userService;

    @GetMapping("/principal")
    public User principleUser(Principal principal) {
        return userService.findUser(principal.getName());
    }

    @GetMapping("/{email}")
    public User getUser(@PathVariable String email) {
        return userService.findUser(email);
    }

    @GetMapping("/all")
    public List<User> getUsers() {
        return userService.findAllUsers();
    }

    @PostMapping("/reg")
    public void registerUser(@RequestBody UserRegRequest userRegRequest) {
        userService.addUser(userRegRequest);
    }

    @Transactional()
    @DeleteMapping("/delete/{userId}")
    public void deleteUser(@PathVariable Long userId) {

//        String sql = "SELECT role_id FROM user_role WHERE user_id = ?";

        userService.deleteUser(userId);
    }

}

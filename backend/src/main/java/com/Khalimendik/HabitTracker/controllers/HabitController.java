package com.Khalimendik.HabitTracker.controllers;

import com.Khalimendik.HabitTracker.DTO.HabitCreateRequest;
import com.Khalimendik.HabitTracker.Repo.HabitRepo;
import com.Khalimendik.HabitTracker.Repo.RepetitionRepo;
import com.Khalimendik.HabitTracker.models.Habit;
import com.Khalimendik.HabitTracker.models.Repetition;
import com.Khalimendik.HabitTracker.models.User;
import com.Khalimendik.HabitTracker.service.HabitService;
import com.Khalimendik.HabitTracker.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/habit")
public class HabitController {

    private HabitService habitService;

    private HabitRepo habitRepo;

    private UserService userService;

    @PostMapping("/create")
    public void createHabit(@RequestBody HabitCreateRequest habitCreateRequest, Principal principal) {
        User user = userService.findUser(principal.getName());
        habitCreateRequest.setUserId(user);
        habitService.createHabit(habitCreateRequest);
    }

    @PostMapping("/change")
    public void changeHabit(@RequestBody HabitCreateRequest habitChangeRequest) {
        habitService.changeHabit(habitChangeRequest);
    }

    @GetMapping("/all")
    public List<Habit> allHabits(Principal principal) {
        User user = userService.findUser(principal.getName());
        return habitService.allHabits(user);
    }

    @GetMapping("/alll")
    public List<Habit> allHabitss(Principal principal) {
        return habitRepo.findAll();
    }

    @GetMapping("/onTheDay")
    public List<Habit> habitOnTheDay(Principal principal) {
        User user = userService.findUser(principal.getName());
        return habitService.habitsOnTheDay(user);
    }

    @GetMapping("/onTheWeak")
    public List<Habit> habitOnTheWeak(Principal principal) {
        User user = userService.findUser(principal.getName());
        return habitService.habitsOnTheWeak(user);
    }

    @PostMapping("/due/{habitId}")
    public void habitDue(@PathVariable Long habitId) {
        habitService.habitDue(habitId);
    }

}

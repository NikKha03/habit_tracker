package com.Khalimendik.HabitTracker.service.Impl;

import com.Khalimendik.HabitTracker.DTO.HabitCreateRequest;
import com.Khalimendik.HabitTracker.Repo.HabitRepo;
import com.Khalimendik.HabitTracker.Repo.HabitStatisticRepo;
import com.Khalimendik.HabitTracker.Repo.RepetitionRepo;
import com.Khalimendik.HabitTracker.models.Habit;
import com.Khalimendik.HabitTracker.models.HabitStatistic;
import com.Khalimendik.HabitTracker.models.Repetition;
import com.Khalimendik.HabitTracker.models.User;
import com.Khalimendik.HabitTracker.service.HabitService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Service
public class HabitServiceImpl implements HabitService {

    private final HabitRepo habitRepo;

    private final HabitStatisticRepo statisticRepo;

    private final RepetitionRepo repetitionRepo;

    @Override
    public void createHabit(HabitCreateRequest habitCreateRequest) {
        Repetition repetition = repetitionRepo.findByValue(habitCreateRequest.getRepetitionValue());
        Habit habit = new Habit();
        habit.setUserId(habitCreateRequest.getUserId());
        habit.setName(habitCreateRequest.getName());
        habit.setDescription(habitCreateRequest.getDescription());
        habit.setCountExecutions(habitCreateRequest.getCountExecutions());
        habit.setRepetitionId(repetition);
        habit.setExecutionTime(habitCreateRequest.getPlannedExecutionTime());
        habit.setStartDate(habitCreateRequest.getStartDate());
        habit.setEndDate(habitCreateRequest.getEndDate());
        habitRepo.save(habit);
    }

    @Override
    public List<Habit> allHabits(User user) {
        return habitRepo.findAllByUserId(user);
    }

    @Override
    public List<Habit> habitsOnTheDay(User user) {
        // Получаем текущую дату
        LocalDate today = LocalDate.now();

        List<Habit> habits = habitRepo.findAllByUserId(user);

        /*
         Фильтрую по условиям:
             1. привычка активна в течении текущего дня;
             2. текущая дата входит в период начала и конца вырабатывания привычки;
        */
        List<Habit> habitsOnTheDay = habits.stream()
                .filter(habit -> habit.getRepetitionId().getValue().equals("on the day"))
                .filter(habit -> {
                    LocalDate startDate = habit.getStartDate();
                    LocalDate endDate = habit.getEndDate();
                    return (startDate.isBefore(today) || startDate.isEqual(today)) && (endDate.isAfter(today) || endDate.isEqual(today));
                })
                .toList();

        for (Habit habit : habitsOnTheDay) {
            habit.setHabitStatistics(
                    habit.getHabitStatistics().stream()
                            .filter(statistic -> statistic.getDueDate().isEqual(today))
                            .toList());
        }

        return habitsOnTheDay;
    }

    @Override
    public List<Habit> habitsOnTheWeak(User user) {
        // Получаем текущую дату
        LocalDate today = LocalDate.now();
        // Находим первый день недели (понедельник)
        LocalDate startOfWeek = today.with(DayOfWeek.MONDAY);
        // Создаем список для хранения дат текущей недели
        List<LocalDate> weekDates = new ArrayList<>();
        // Добавляем все дни недели (с понедельника по воскресенье)
        for (int i = 0; i < 7; i++) {
            weekDates.add(startOfWeek.plusDays(i));
        }

        List<Habit> habits = habitRepo.findAllByUserId(user);

         /*
         Фильтрую по условиям:
             1. привычка активна в течении текущей недели;
             2. текущая дата входит в период начала и конца вырабатывания привычки;
        */
        List<Habit> habitsOnTheWeak = habits.stream()
                .filter(habit -> habit.getRepetitionId().getValue().equals("on the weak"))
                .filter(habit -> {
                    LocalDate startDate = habit.getStartDate();
                    LocalDate endDate = habit.getEndDate();
                    return (startDate.isBefore(today) || startDate.isEqual(today)) && (endDate.isAfter(today) || endDate.isEqual(today));
                })
                .toList();

        for (Habit habit : habitsOnTheWeak) {
            habit.setHabitStatistics(
                    habit.getHabitStatistics().stream()
                            .filter(statistic -> weekDates.contains(statistic.getDueDate()))
                            .toList());
        }

        return habitsOnTheWeak;
    }

    @Override
    public void habitDue(Long habitId) {

        LocalDate localDate = LocalDate.now();
        HabitStatistic statistic = new HabitStatistic();
        statistic.setDueDate(localDate);
        statistic.setHabitId(habitRepo.findById(habitId).get());

        statisticRepo.save(statistic);
    }

}

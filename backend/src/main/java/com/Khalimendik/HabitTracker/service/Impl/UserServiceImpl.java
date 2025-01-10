package com.Khalimendik.HabitTracker.service.Impl;

import com.Khalimendik.HabitTracker.DTO.UserRegRequest;
import com.Khalimendik.HabitTracker.Repo.RoleRepo;
import com.Khalimendik.HabitTracker.Repo.UserRepo;
import com.Khalimendik.HabitTracker.models.User;
import com.Khalimendik.HabitTracker.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class UserServiceImpl implements UserService {

    private UserRepo userRepo;

    private final RoleRepo roleRepo;

    @Override
    public void addUser(UserRegRequest userRegRequest) {
        User user = new User();
        user.setTg(userRegRequest.getTg());
        user.setName(userRegRequest.getName());
        user.setEmail(userRegRequest.getEmail());
        user.setPassword(userRegRequest.getPassword());
        user.setRoles(roleRepo.getRolesByRoleName("ROLE_USER"));
        userRepo.save(user);
    }

    @Override
    public User findUser(String email) {
        return userRepo.findUserByEmail(email);
    }

    @Override
    public User findUser(Long id) {
        return userRepo.findById(id).get();
    }

    @Override
    public List<User> findAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public void deleteUser(Long userId) {
        userRepo.deleteById(userId);
    }
}

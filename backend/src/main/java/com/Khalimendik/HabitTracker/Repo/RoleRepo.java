package com.Khalimendik.HabitTracker.Repo;

import com.Khalimendik.HabitTracker.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoleRepo extends JpaRepository<Role, Long> {

    List<Role> getRolesByRoleName(String roleName);

}

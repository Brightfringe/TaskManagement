package com.shubhangi.task_management.repository;

import com.shubhangi.task_management.entity.Task;
import com.shubhangi.task_management.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface TaskRepository extends JpaRepository<Task, Long> {

    List<Task> findByUser(User user);

    Optional<Task> findByIdAndUser(Long id, User user);

}

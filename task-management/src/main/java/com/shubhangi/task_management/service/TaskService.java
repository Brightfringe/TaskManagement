package com.shubhangi.task_management.service;

import com.shubhangi.task_management.dto.TaskRequest;
import com.shubhangi.task_management.dto.TaskResponse;
import com.shubhangi.task_management.entity.Role;
import com.shubhangi.task_management.entity.Task;
import com.shubhangi.task_management.entity.User;
import com.shubhangi.task_management.exception.ResourceNotFoundException;
import com.shubhangi.task_management.repository.TaskRepository;
import com.shubhangi.task_management.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskService(TaskRepository taskRepository,
                       UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }

    private User getCurrentUser(Authentication authentication) {

        return userRepository.findByEmail(authentication.getName())
                .orElseThrow(() ->
                        new ResourceNotFoundException("User not found"));
    }

    private TaskResponse map(Task task) {

        return TaskResponse.builder()
                .id(task.getId())
                .title(task.getTitle())
                .description(task.getDescription())
                .status(task.getStatus())
                .createdAt(task.getCreatedAt())
                .build();
    }

    public TaskResponse createTask(TaskRequest request,
                                   Authentication authentication) {

        User user = getCurrentUser(authentication);

        Task task = Task.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .status(request.getStatus())
                .user(user)
                .build();

        taskRepository.save(task);

        return map(task);
    }

    public List<TaskResponse> getMyTasks(Authentication authentication) {

        User user = getCurrentUser(authentication);

        List<Task> tasks;

        if (user.getRole() == Role.ADMIN) {
            tasks = taskRepository.findAll();
        } else {
            tasks = taskRepository.findByUser(user);
        }

        return tasks.stream()
                .map(this::map)
                .toList();
    }

    public TaskResponse getTask(Long id,
                                Authentication authentication) {

        User user = getCurrentUser(authentication);

        Task task;

        if (user.getRole() == Role.ADMIN) {

            task = taskRepository.findById(id)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Task not found"));

        } else {

            task = taskRepository.findByIdAndUser(id, user)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Task not found"));
        }

        return map(task);
    }

    public TaskResponse updateTask(Long id,
                                   TaskRequest request,
                                   Authentication authentication) {

        User user = getCurrentUser(authentication);

        Task task;

        if (user.getRole() == Role.ADMIN) {

            task = taskRepository.findById(id)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Task not found"));

        } else {

            task = taskRepository.findByIdAndUser(id, user)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Task not found"));
        }

        task.setTitle(request.getTitle());
        task.setDescription(request.getDescription());
        task.setStatus(request.getStatus());

        taskRepository.save(task);

        return map(task);
    }

    public String deleteTask(Long id,
                             Authentication authentication) {

        User user = getCurrentUser(authentication);

        Task task;

        if (user.getRole() == Role.ADMIN) {

            task = taskRepository.findById(id)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Task not found"));

        } else {

            task = taskRepository.findByIdAndUser(id, user)
                    .orElseThrow(() ->
                            new ResourceNotFoundException("Task not found"));
        }

        taskRepository.delete(task);

        return "Task deleted successfully";
    }
}
package com.shubhangi.task_management.controller;

import com.shubhangi.task_management.dto.TaskRequest;
import com.shubhangi.task_management.dto.TaskResponse;
import com.shubhangi.task_management.service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tasks")
@Tag(name = "Tasks", description = "Task Management APIs")
public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @Operation(summary = "Create a new task")
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TaskResponse createTask(
            @Valid @RequestBody TaskRequest request,
            Authentication authentication) {

        return taskService.createTask(request, authentication);
    }

    @Operation(summary = "Get all tasks of the logged-in user")
    @GetMapping
    public List<TaskResponse> getTasks(Authentication authentication) {

        return taskService.getMyTasks(authentication);
    }

    @Operation(summary = "Get a task by ID")
    @GetMapping("/{id}")
    public TaskResponse getTask(
            @PathVariable Long id,
            Authentication authentication) {

        return taskService.getTask(id, authentication);
    }

    @Operation(summary = "Update an existing task")
    @PutMapping("/{id}")
    public TaskResponse updateTask(
            @PathVariable Long id,
            @Valid @RequestBody TaskRequest request,
            Authentication authentication) {

        return taskService.updateTask(id, request, authentication);
    }

    @Operation(summary = "Delete a task (Admin only)")
    @DeleteMapping("/{id}")
    public String deleteTask(
            @PathVariable Long id,
            Authentication authentication) {

        return taskService.deleteTask(id, authentication);
    }
}
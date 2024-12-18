package com.plantify.backend.controller;

import com.plantify.backend.dto.UserDTO;
import com.plantify.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// our user controller will be used for handling user related endpoints. example is the get all users endpoint and create user endpoint
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO user) {
        return userService.createUser(user.getUsername(), user.getEmail());
    }
}

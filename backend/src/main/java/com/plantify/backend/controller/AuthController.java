package com.plantify.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

// This Auth Controller will be used for handling authentication related endpoints.
// We will have a login endpoint that will accept username and password as input and return a dummy JWT token, (for now until later changed)
    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        // Dummy logic for login
        if (username.equals("admin") && password.equals("password")) {
            return "Login successful! Token: dummy-jwt-token";
        }
        return "Invalid credentials";
    }
}

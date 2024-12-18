package com.plantify.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// This AppController is what we will use for the root paths of our API.
@RestController
@RequestMapping("/")
public class AppController {

    @GetMapping
    public String home() {
        return "Welcome to the Plantify API!";
    }

    @GetMapping("/health")
    public String healthCheck() {
        return "API is running!";
    }
}

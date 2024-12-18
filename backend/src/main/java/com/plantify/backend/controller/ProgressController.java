package com.plantify.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    // this progress conttroller will be used for handling progress related endpoints. example is the submit progress endpoint
    @PostMapping
    public String submitProgress(@RequestParam String progressDetail) {
        return "Progress submitted: " + progressDetail;
    }
}

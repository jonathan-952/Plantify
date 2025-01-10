package com.plantify.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {
    private String formData;
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setFormData(String data) {
        this.formData = data;
    }

    // this progress conttroller will be used for handling progress related endpoints. example is the submit progress endpoint
    @PostMapping
    public String submitProgress(@RequestBody String progressDetail) {
        setFormData(progressDetail);
        //do something different with the data if submitting vs saving when db is setup
        if (this.status == "submit") {

        }
        return "Progress submitted: " + progressDetail;
    }
}

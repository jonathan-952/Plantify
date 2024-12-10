package com.plantify.backend.controller;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.plantify.backend.model.RequestData;
import com.plantify.backend.model.ResponseData;

@Controller
@RequestMapping("/api")
public class AppController {
    @GetMapping("/greeting")
    public String greet() {
        return "hello from api";
    }

    @PostMapping("/data")
    public ResponseData processData(@RequestBody RequestData requestData) {
        ResponseData responseData = new ResponseData();
        responseData.setMessage("data processed");
        return responseData;
    }
}

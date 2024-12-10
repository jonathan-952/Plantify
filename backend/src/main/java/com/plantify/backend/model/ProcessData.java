package com.plantify.backend.model;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


public class ProcessData {
    @PostMapping("/data")
    public ResponseData processData(@RequestBody RequestData requestdata) {
        ResponseData responseData = new ResponseData();
        return responseData;
    }
}

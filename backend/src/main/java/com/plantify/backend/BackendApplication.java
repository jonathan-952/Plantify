package com.plantify.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(exclude = {org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration.class})
public class BackendApplication {
	// this is the main entry point for our Spring Boot application.
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }
}

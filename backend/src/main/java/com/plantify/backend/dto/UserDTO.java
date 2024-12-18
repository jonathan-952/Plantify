package com.plantify.backend.dto;

// a DTO is a Data Transfer Object
// it is used to encapsulate data and send it from one part of the application to another
// in this case, we will use it used to send user data from the backend to the frontend

public class UserDTO {
    private String username;
    private String email;

    // Constructor
    public UserDTO(String username, String email) {
        this.username = username;
        this.email = email;
    }

    // Getters
    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    // Setters (if needed)
    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

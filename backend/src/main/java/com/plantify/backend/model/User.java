package com.plantify.backend.model;

public class User {
    private String id;
    private String username;
    private String email;

    // no-argument constructor (required for frameworks)
    // a no argument constructor is a constructor that takes no parameters
    public User() {
    }

    // All-arguments constructor
    // this constructor is a constructor that takes all the properties of the class as arguments
    public User(String id, String username, String email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    // getters
    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    // setters
    public void setId(String id) {
        this.id = id;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

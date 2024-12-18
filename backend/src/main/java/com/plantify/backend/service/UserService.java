package com.plantify.backend.service;

import com.plantify.backend.dto.UserDTO;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {
    private final List<UserDTO> users = new ArrayList<>();

    public UserService() {
        // dummy data
        users.add(new UserDTO("user1", "user1@example.com"));
        users.add(new UserDTO("user2", "user2@example.com"));
    }

    public List<UserDTO> getAllUsers() {
        return users;
    }

    public UserDTO createUser(String username, String email) {
        UserDTO newUser = new UserDTO(username, email);
        users.add(newUser);
        return newUser;
    }
}

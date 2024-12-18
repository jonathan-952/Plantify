package com.plantify.backend.model;

public class Progress {
    private String taskName;       // our name of the task or activity
    private int completion;        // completion percentage (0-100)
    private String status;         // task status: e.g., "In Progress", "Completed"

    // constructor
    public Progress(String taskName, int completion, String status) {
        this.taskName = taskName;
        this.completion = completion;
        this.status = status;
    }

    // getters
    public String getTaskName() {
        return taskName;
    }

    public int getCompletion() {
        return completion;
    }

    public String getStatus() {
        return status;
    }

    // setters
    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public void setCompletion(int completion) {
        this.completion = completion;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}

package com.examcrud.demo.repo;

import com.examcrud.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository <User, Integer>{

    public User findByEmailId(String emailId);
    public User findByEmailIdAndPassword(String emailId, String password);

}

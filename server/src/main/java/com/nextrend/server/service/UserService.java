package com.nextrend.server.service;

import com.nextrend.server.exception.UserException;
import com.nextrend.server.model.User;

public interface UserService {

    public User findUserById(Long userId) throws UserException;

    public User findUserProfileByJwt(String jwt) throws UserException;

}

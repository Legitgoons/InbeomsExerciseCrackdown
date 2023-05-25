package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.ssafit.model.dao.UserDao;
import com.ssafy.ssafit.model.dto.User;

@Service
public class UserServiceImpl implements UserService{
	private UserDao userDao;
	
	@Autowired
	public void setUserRepo(UserDao userRepo) {
		this.userDao=userRepo;
	}
	@Override
	@Transactional
	public int registUser(User user) {
		return userDao.insertUser(user);
	}
	
	@Override
	@Transactional
	public User readUser(String id) {
		return userDao.selectUser(id);
	}
	
	@Override
	public List<User> getUserList() {
		return userDao.selectUserAll();
	}


}

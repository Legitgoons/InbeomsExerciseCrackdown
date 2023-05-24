package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.User;
public interface UserDao {
	// 회원가입
	public int insertUser(User user);
	
	// 유저 선택후 조회
	public User selectUser(String id);
	// 유저 목록
	public List<User> selectUserAll();


	
	
	
}

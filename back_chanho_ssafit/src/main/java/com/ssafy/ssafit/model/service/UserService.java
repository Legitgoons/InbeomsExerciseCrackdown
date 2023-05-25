package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.User;

public interface UserService {
	// 회원 가입
	public int registUser(User user);

	// 로그인 
//	public User login(String id, String password);
	// 유저 선택후 조회
	public User readUser(String id);
	// 유저 목록
	public List<User> getUserList();
	

	
	
	

}

package com.ssafy.ssafit.controller;

import java.io.UnsupportedEncodingException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.User;
import com.ssafy.ssafit.model.service.UserService;
import com.ssafy.ssafit.util.JwtUtil;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;



@RestController
@RequestMapping("/api-user")
@Api(tags="유저 컨트롤러")
public class UserRestController {

	@Autowired
	private UserService userService;
	
	@Autowired
	private JwtUtil jwtUtil;


	// 유저 목록
	@ApiOperation(value = "유저 불러오기.")
	@GetMapping("/userList")
	public List<User> userList() {
		return userService.getUserList();
	}
	
	// 유저 선택
	@GetMapping("/user/{id}")
	@ApiOperation(value = "{id}에 해당하는 사용자 정보를 반환한다.")
	public ResponseEntity<?> select(@PathVariable String id) {
		try {
			User user = userService.readUser(id);
			if (user != null) {
				return new ResponseEntity<User>(user, HttpStatus.OK);
			} else {
				return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	// 회원가입
	@PostMapping("/register")
	@ApiOperation(value = "회원가입.")
	public ResponseEntity<Integer> register(@RequestBody User user) {
		if(userService.readUser(user.getId())!=null) {
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
		else {
		int result = userService.registUser(user);
		return new ResponseEntity<Integer>(result, HttpStatus.CREATED);
	}}

	// 로그인
	@PostMapping("/login")
	@ApiOperation(value = "로그인.")
	public ResponseEntity<Map<String, Object>> login(@RequestBody User user) {

		Map<String, Object> result = new HashMap<String, Object>();
		HttpStatus status = null;
		User tryUser = userService.readUser(user.getId());
		try {
			if (tryUser.getId().equals(user.getId())&&user.getId() != null && user.getId().length() > 0 && tryUser != null && tryUser.getPassword().equals(user.getPassword()) && user.getPassword().length() > 0 )  {
				result.put("access-token", jwtUtil.createToken("id", user.getId(),user.getIsAdmin()));
				status = HttpStatus.ACCEPTED;
			}
			else {
				status = HttpStatus.BAD_REQUEST;
			}
		} catch (UnsupportedEncodingException e) {
			status = HttpStatus.INTERNAL_SERVER_ERROR;
		}
		return new ResponseEntity<Map<String,Object>>(result, status);
	}
	



	// 로그아웃
	@GetMapping("logout")
	@ApiOperation(value = "록아웃.")
	public ResponseEntity<Void> logout(HttpSession session) {
		session.invalidate();
		return new ResponseEntity<Void>(HttpStatus.OK);

	}
	
	private ResponseEntity<String> exceptionHandling(Exception e) {
		e.printStackTrace();
		return new ResponseEntity<String>("오류가 발생했습니다: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

}
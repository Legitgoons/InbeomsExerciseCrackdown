package com.ssafy.ssafit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.Alarm;
import com.ssafy.ssafit.model.dto.Friend;
import com.ssafy.ssafit.model.service.AlarmService;
import com.ssafy.ssafit.model.service.FriendService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api-friend")
public class FriendRestController {
	@Autowired
	private FriendService friendService;
	
	// 친구 신청
	@ApiOperation(value="친구 신청")
	@PostMapping("/friend")
	public ResponseEntity<Integer> register(Friend friend) {
		int result =friendService.registFriend(friend);
		return new ResponseEntity<Integer>(result, HttpStatus.CREATED);
	}
	
	@ApiOperation(value= "친구 신청 승락")
	@PutMapping("/friend/accept/{friendId}")
	public ResponseEntity<?> accept(@PathVariable int friendId) {
		try {
			int result = friendService.acceptFriend(friendId,1);
			return new ResponseEntity<Integer>(result, HttpStatus.OK);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}
	@ApiOperation(value= "친구 신청 거절")
	@PutMapping("/friend/reject/{friendId}")
	public ResponseEntity<?> reject(@PathVariable int friendId) {
		try {
			int result = friendService.rejectFriend(friendId,2);
			return new ResponseEntity<Integer>(result, HttpStatus.OK);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}
	
	
	private ResponseEntity<String> exceptionHandling(Exception e) {
		e.printStackTrace();
		return new ResponseEntity<String>("오류가 발생했습니다: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}


}

package com.ssafy.ssafit.controller;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.Friend;
import com.ssafy.ssafit.model.service.FriendService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api-friend")
public class FriendRestController {
	@Autowired
	private FriendService friendService;

	// 친구 신청
	@ApiOperation(value = "친구 신청", response = Integer.class)
	@PostMapping("/friend")
	public ResponseEntity<?> register(@RequestBody Friend friend) {
		int result = friendService.registFriend(friend);
		return new ResponseEntity<Integer>(result, HttpStatus.CREATED);
	}

	@ApiOperation(value = "친구 신청 승락")
	@PutMapping("/friend/accept/{friendId}")
	public ResponseEntity<?> accept(@PathVariable int friendId) {
		try {
			int result = friendService.acceptFriend(friendId, 1);
			return new ResponseEntity<Integer>(result, HttpStatus.OK);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	@ApiOperation(value = "친구 신청 거절")
	@PutMapping("/friend/reject/{friendId}")
	public ResponseEntity<?> reject(@PathVariable int friendId) {
		try {
			int result = friendService.rejectFriend(friendId, 2);
			return new ResponseEntity<Integer>(result, HttpStatus.OK);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	@DeleteMapping("/friend/{friendId}")
	@ApiOperation(value = "친구삭제", response = Integer.class)
	public ResponseEntity<?> delete(@PathVariable int friendId) {
		try {
			int result = friendService.cutOffFriend(friendId);
			return new ResponseEntity<Integer>(result, HttpStatus.OK);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	@GetMapping("/friendList/{userId}")
	@ApiOperation(value = "친구 목록")
	public ResponseEntity<?> selectFriend(@PathVariable String userId) {
		try {
			List<Friend> friends = friendService.getFriendList(userId);
			List<String> result = new LinkedList<>();
			for (Friend i : friends) {
				if (friendService.checkFriend(userId, i.getFriendUserId())) {
					result.add(i.getFriendUserId());
				} else if (friendService.checkFriend(userId, i.getUserId())) {
					result.add(i.getUserId());
				}
			}
			if(result.isEmpty()) {
				return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			}
			else {
				return new ResponseEntity<List<String>>(result, HttpStatus.OK);
			}
		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}



	@ApiOperation(value = "친구 확인")
	@GetMapping("/friend/{userId}/{friendUserId}")
	public boolean isFriend(@PathVariable String userId, @PathVariable String friendUserId) {
		return friendService.checkFriend(userId, friendUserId);
	}

	private ResponseEntity<String> exceptionHandling(Exception e) {
		e.printStackTrace();
		return new ResponseEntity<String>("오류가 발생했습니다: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

}

package com.ssafy.ssafit.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.Diary;
import com.ssafy.ssafit.model.service.DiaryService;
import com.ssafy.ssafit.model.service.FriendService;
import com.ssafy.ssafit.model.service.UserService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api-diary")
public class DiaryRestController {
	@Autowired
	private DiaryService diaryService;
	@Autowired
	private FriendService friendService;
	@Autowired
	private UserService userService;

	// 기록 목록
	@ApiOperation(value = "기록 목록")
	@GetMapping("/diaryList/{userId}")
	public ResponseEntity<?> list(@PathVariable String userId) {
		List<Diary> list = diaryService.getDiaryList(userId);
		if (list == null || list.size() == 0) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<List<Diary>>(list, HttpStatus.OK);
	}

	// 기록 상세보기
	@ApiOperation(value = "기록 상세 ")
	@GetMapping("/detail/{diaryId}")
	public ResponseEntity<Diary> detail(@PathVariable int diaryId) {
		Diary diary = diaryService.readDiary(diaryId);
		return new ResponseEntity<Diary>(diary, HttpStatus.OK);
	}

	// 기록 등록
	@ApiOperation(value = "기록 등록")
	@PostMapping("/diary")
	public ResponseEntity<?> register(@RequestBody Diary diary) {
		try {
			int result = diaryService.registDiary(diary);
			return new ResponseEntity<Integer>(result, HttpStatus.CREATED);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	// 기록 수정
	@ApiOperation(value = "기록 수정")
	@PutMapping("/diary/{diaryId}/{userId}")
	public ResponseEntity<?> update(@PathVariable int diaryId, @RequestBody Diary diary, @PathVariable String userId,
			HttpSession session) {
		String nowId = userId;
		int isAdmin = userService.readUser(userId).getIsAdmin();
		try {
			if (nowId != null && (nowId.equals(diary.getUserId())
					|| (isAdmin == 1 && friendService.checkFriend(userId, diary.getUserId())))) {
				int result = diaryService.setDiary(diary);
				return new ResponseEntity<Integer>(result, HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("권한이 없습니다.", HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	// 기록 삭제
	@ApiOperation(value = "기록 삭제.")
	@DeleteMapping("/diary/{diaryId}")
	public ResponseEntity<?> delete(@PathVariable int diaryId, @RequestBody Diary diary,
			HttpSession session) {
		String nowId = diary.getUserId();
		int isAdmin = userService.readUser(nowId).getIsAdmin();
		try {
			if (nowId != null && (nowId.equals(diary.getUserId())
					|| (isAdmin == 1 && friendService.checkFriend(nowId, diary.getUserId())))) {
				int result = diaryService.removeDiary(diaryId);
				if (result == 0)
					throw new Exception();
				return new ResponseEntity<Void>(HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("권한이 없습니다.", HttpStatus.UNAUTHORIZED);
			}
		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	// 예외
	private ResponseEntity<String> exceptionHandling(Exception e) {
		e.printStackTrace();
		return new ResponseEntity<String>("오류가 발생했습니다: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

}

package com.ssafy.ssafit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.Exercise;
import com.ssafy.ssafit.model.dto.User;
import com.ssafy.ssafit.model.service.ExerciseService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api-exercise")
@Api(tags="운동 컨트롤러")
public class ExerciseRestController {
	@Autowired
	private ExerciseService exerciseService;
	
	// 부위 선택해서 운동 불러오기
	@ApiOperation(value = "운동 불러오기.")
	@GetMapping("/exerciseList")
	public List<Exercise> exerciseList(String part) {
		return exerciseService.getExerciseList(part);
	}
	
	@ApiOperation(value = "운동 전부 불러오기.", response=Exercise.class)
	@GetMapping("/exerciseAllList")
	public ResponseEntity<?> exerciseAllList() {
		try {
			List<Exercise> exercises = exerciseService.getAllExercise();
			if (exercises.size()>0) {
				return new ResponseEntity<List<Exercise>>(exercises, HttpStatus.OK);
			} else {
				return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}
	// 운동 선택
	@GetMapping("/exercise/{youtubeId}")
	@ApiOperation(value = "유튜브 아이디로 영상 찾기")
	public ResponseEntity<?> select(@PathVariable String youtubeId) {
		try {
			Exercise exercise = exerciseService.readExercise(youtubeId);
			if (exercise != null) {
				return new ResponseEntity<Exercise>(exercise, HttpStatus.OK);
			} else {
				return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			}
		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}
	// 운동 검색
	@GetMapping("/exercise/title/{title}")
	@ApiOperation(value = "제목 검색")
	public ResponseEntity<?> search(@PathVariable String title) {
		
		List<Exercise> exercises = exerciseService.searchByTitle(title);
		
		if (exercises!=null) {
			return new ResponseEntity<List<Exercise>>(exerciseService.searchByTitle(title), HttpStatus.OK);
		
			
		} else {
			return 	new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		
	}
	
	
	
	
	private ResponseEntity<String> exceptionHandling(Exception e) {
		e.printStackTrace();
		return new ResponseEntity<String>("오류가 발생했습니다: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

}

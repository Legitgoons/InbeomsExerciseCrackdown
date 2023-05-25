package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.Exercise;

public interface ExerciseService {
	// 영상 파트별로  불러오기 
	public List<Exercise> getExerciseList(String part);
	
	// 영상 상세 보기
	public Exercise readExercise(String youtubeId);
	
	// 영상 검색
	public List<Exercise> searchByTitle(String title);

	public List<Exercise> getAllExercise();
	
	
	

}

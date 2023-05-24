package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.Exercise;

public interface ExerciseDao {
	// 운동 불러오기
	public List<Exercise> selectExerciseList(String part);
	
	// 상세 보기
	public Exercise selectExercise(String youtubeId);
	
	// 제목으로 검색
	List<Exercise> searchByTitle(String title);

}

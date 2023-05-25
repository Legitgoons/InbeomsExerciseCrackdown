package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.ssafit.model.dao.ExerciseDao;
import com.ssafy.ssafit.model.dto.Exercise;

@Service
public class ExerciseServiceImpl implements ExerciseService {
	private ExerciseDao exerciseDao;
	
	@Autowired
	public void setExerciseRepo(ExerciseDao exerciseRepo) {
		this.exerciseDao=exerciseRepo;
		
	}

	@Override
	@Transactional
	public List<Exercise> getExerciseList(String part) {
		return exerciseDao.selectExerciseList(part);
	}

	@Override
	@Transactional
	public Exercise readExercise(String youtubeId) {
		return exerciseDao.selectExercise(youtubeId);
	}

	@Override
	@Transactional
	public List<Exercise> searchByTitle(String title) {
		return exerciseDao.searchByTitle(title);
	}

	// 운동 전체 불러오기
	@Override
	@Transactional
	public List<Exercise> getAllExercise() {
		return exerciseDao.selectExerciseAll();
	}
	


}

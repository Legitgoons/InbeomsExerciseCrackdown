package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.Diary;

public interface DiaryDao {
	// 기록 전부 불러오기
	public List<Diary> selectDiaryAll(String userId);
	
	// 기록 상세보기
	public Diary selectDiary(int diaryId);
	
	// 기록 수정
	public int updateDiary(Diary diary);
	
	// 기록 삭제
	public int deleteDiary(int diaryId);
	
	// 기록 생성
	public int insertDiary(Diary diary);


}

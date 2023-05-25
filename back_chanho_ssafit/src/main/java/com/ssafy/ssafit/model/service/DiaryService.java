package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.Diary;

public interface DiaryService {
	public int registDiary(Diary diary);
	public int removeDiary(int diaryId);
	public int setDiary(Diary diary);
	public List<Diary> getDiaryList(String userId);
	// 알람 상세
	public Diary readDiary(int diaryId);

}

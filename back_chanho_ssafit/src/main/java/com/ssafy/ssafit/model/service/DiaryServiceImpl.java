package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.ssafit.model.dao.DiaryDao;
import com.ssafy.ssafit.model.dto.Diary;

@Service
public class DiaryServiceImpl implements DiaryService {
	private DiaryDao diaryDao;

	


	@Autowired
	public void setDiaryRepo(DiaryDao diaryRepo) {
		this.diaryDao = diaryRepo;
	}

	public DiaryDao getDiaryRepo() {
		return this.diaryDao;
	}

	// 기록 상세
	@Override
	@Transactional
	public Diary readDiary(int diaryId) {
		return diaryDao.selectDiary(diaryId);
	}
	// 기록 생성
	@Override
	@Transactional
	public int registDiary(Diary diary) {
		return diaryDao.insertDiary(diary);
	}

	// 기록 삭제
	@Override
	@Transactional
	public int removeDiary(int diaryId) {
		return diaryDao.deleteDiary(diaryId);
	}

	// 기록 수정
	@Override
	@Transactional
	public int setDiary(Diary diary) {
		return diaryDao.updateDiary(diary);
	}

	// 기록 전체 불러오기 
	@Override
	@Transactional
	public List<Diary> getDiaryList(String userId) {
		return diaryDao.selectDiaryAll(userId);
	}
	

}

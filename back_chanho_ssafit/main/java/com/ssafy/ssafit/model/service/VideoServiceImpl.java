package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.ssafit.model.dao.VideoDao;
import com.ssafy.ssafit.model.dto.SearchCondition;
import com.ssafy.ssafit.model.dto.Video;

@Service
public class VideoServiceImpl implements VideoService{
	private VideoDao videoDao;
	
	@Autowired
	public void setVideoRepo(VideoDao videoRepo) {
		this.videoDao=videoRepo;
	}

	// 영상 검색
	@Override
	@Transactional
	public List<Video> searchByCondition(SearchCondition con) {
		return videoDao.search(con);
	}
	
	// 영상 선택
	@Override
	public Video readVideo(String videoId) {
		return videoDao.selectVideo(videoId);
	}
	

}

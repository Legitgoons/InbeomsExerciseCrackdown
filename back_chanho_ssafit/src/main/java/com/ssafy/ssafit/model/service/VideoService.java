package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.SearchCondition;
import com.ssafy.ssafit.model.dto.Video;


public interface VideoService {
	// 영상 검색
	List<Video> searchByCondition(SearchCondition con);
	// 영상 선택
	public Video readVideo(String videoId);
	
}

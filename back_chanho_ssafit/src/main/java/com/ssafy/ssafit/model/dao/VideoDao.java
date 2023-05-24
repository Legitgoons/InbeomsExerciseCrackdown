package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.SearchCondition;
import com.ssafy.ssafit.model.dto.Video;

public interface VideoDao {

	// 영상 검색
	public List<Video> search(SearchCondition searchcondition);
	
	// 영상 선택 
	public Video selectVideo(String videoId);

}

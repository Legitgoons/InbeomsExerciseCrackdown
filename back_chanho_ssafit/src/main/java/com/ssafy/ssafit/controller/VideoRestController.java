package com.ssafy.ssafit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.SearchCondition;
import com.ssafy.ssafit.model.dto.Video;
import com.ssafy.ssafit.model.service.VideoService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api-video")
public class VideoRestController {
	@Autowired
	private VideoService videoService;

	// 검색
	@GetMapping("/search")
	@ApiOperation(value = "비디오 검색.")
	public ResponseEntity<?> search(SearchCondition searchcondition) {
		
		List<Video> list = videoService.searchByCondition(searchcondition);
		
		if (list.isEmpty()||list.size()==0) {
		return 	new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
			
		} else {
		return new ResponseEntity<List<Video>>(videoService.searchByCondition(searchcondition), HttpStatus.OK);
		}
	}
	
	@ApiOperation(value="비디오 상세 ")
	@GetMapping("/detail/{videoId}")
	public ResponseEntity<Video> detail(@PathVariable String videoId) {
		Video video = videoService.readVideo(videoId);
		return new ResponseEntity<Video>(video, HttpStatus.OK);
	}
	
	
	
}

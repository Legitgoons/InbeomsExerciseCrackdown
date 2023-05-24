package com.ssafy.ssafit.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.ssafit.model.dto.Alarm;
import com.ssafy.ssafit.model.dto.User;
import com.ssafy.ssafit.model.service.AlarmService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api-alarm")
@Api(tags = "Alarm 컨트롤러")
public class AlarmRestController {

	@Autowired
	private AlarmService alarmService;

	@GetMapping("/alarm")
	@ApiOperation(value = "알람 불러오기.")
	public ResponseEntity<?> list(String userId) {
		List<Alarm> list = alarmService.getAlarmList(userId);
		if (list == null || list.size() == 0) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}

		return new ResponseEntity<List<Alarm>>(list, HttpStatus.OK);
	}
	
	@GetMapping("/detail/{alarmId}")
	@ApiOperation(value = "알람 상세보기.")
	public ResponseEntity<Alarm> detail(@PathVariable int alarmId) {
		Alarm alarm = alarmService.readAlarm(alarmId);
		return new ResponseEntity<Alarm>(alarm, HttpStatus.OK);
	}

	@PostMapping("/alarm")
	@ApiOperation(value = "알람 제출.")
	public ResponseEntity<?> write(Alarm alarm) {
		try {
			int result = alarmService.registAlarm(alarm);
			if (result == 0)
				throw new Exception();
			return new ResponseEntity<Alarm>(alarm, HttpStatus.CREATED);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	@DeleteMapping("/alarm/{alarmId}")
	@ApiOperation(value = "알람 삭제.")
	public ResponseEntity<?> delete(@PathVariable int alarmId) {
		try {
			int result = alarmService.removeAlarm(alarmId);

			if (result == 0)
				throw new Exception();

			return new ResponseEntity<Void>(HttpStatus.OK);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	// 알람 정보 수정
	@PutMapping("/alarm/{alarmId}")
	@ApiOperation(value = "알람 정보 수정", response = Integer.class)
	public ResponseEntity<?> update(@RequestBody Alarm alarm) {
		try {
			int result = alarmService.setAlarm(alarm);
			return new ResponseEntity<Integer>(result, HttpStatus.OK);

		} catch (Exception e) {
			return exceptionHandling(e);
		}
	}

	private ResponseEntity<String> exceptionHandling(Exception e) {
		e.printStackTrace();
		return new ResponseEntity<String>("Sorry: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	}

}

package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.Alarm;

public interface AlarmService {
	// 알람 목록
	public List<Alarm> getAlarmList(String userId);
	
	// 알람 상세
	public Alarm readAlarm(int alarmId);
	
	// 알람 생성
	public int registAlarm(Alarm alarm);
	
	// 알람 수정 (읽었는지 확인!)
	public int setAlarm(Alarm alarm);
	
	// 알람 삭제
	public int removeAlarm(int alarmId);


}

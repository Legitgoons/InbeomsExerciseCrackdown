package com.ssafy.ssafit.model.dao;

import java.util.List;
import com.ssafy.ssafit.model.dto.Alarm;

public interface AlarmDao {
	public List<Alarm> selectAlarmAll(String userId);
	
	// 알람 상세 
	public Alarm selectAlarm(int alarmId);
	
	// 알람 삭제
	public int deleteAlarm(int alarmId);
	
	// 알람 읽었는지 확인
	public int updateAlarm(Alarm alarm);
	
	// 알람 생성
	public int insertAlarm(Alarm alarm);
	
	
	

}

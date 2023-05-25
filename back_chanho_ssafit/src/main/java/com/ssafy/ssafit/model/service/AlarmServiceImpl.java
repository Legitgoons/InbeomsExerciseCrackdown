package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.ssafit.model.dao.AlarmDao;
import com.ssafy.ssafit.model.dto.Alarm;

@Service
public class AlarmServiceImpl implements AlarmService{
	private AlarmDao alarmDao;
	
	@Autowired
	public void setAlarmRepo(AlarmDao alarmRepo) {
		this.alarmDao=alarmRepo;
	}
	// 알람 삭제
	@Override
	@Transactional
	public int removeAlarm(int alarmId) {
		return alarmDao.deleteAlarm(alarmId);
	}
	
	// 알람 상세
	@Override
	@Transactional
	public Alarm readAlarm(int alarmId) {
		return alarmDao.selectAlarm(alarmId);
	}
	
	// 알람 수정 (읽었을 경우 변화 주기)
	@Override
	@Transactional
	public int setAlarm(Alarm alarm) {
		return alarmDao.updateAlarm(alarm);
	}
	
	@Override
	@Transactional
	// 알람 목록 불러오기
	public List<Alarm> getAlarmList(String userId){
		return alarmDao.selectAlarmAll(userId);
	}
	@Override
	public int registAlarm(Alarm alarm) {
		
		return alarmDao.insertAlarm(alarm);
	}


}

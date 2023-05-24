package com.ssafy.ssafit.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.ssafit.model.dao.AlarmDao;
import com.ssafy.ssafit.model.dao.FriendDao;
import com.ssafy.ssafit.model.dto.Alarm;
import com.ssafy.ssafit.model.dto.Friend;

@Service
public class FriendServiceImpl implements FriendService {
	private FriendDao friendDao;

	private AlarmDao alarmDao;

	@Autowired
	public void setAlarmRepo(AlarmDao alarmRepo) {
		this.alarmDao = alarmRepo;
	}

	@Autowired
	public void setFreindRepo(FriendDao friendRepo) {
		this.friendDao = friendRepo;
	}

	@Override
	@Transactional
	public int registFriend(Friend friend) {
		return friendDao.insertFriend(friend);
	}

	@Override
	@Transactional
	public int acceptFriend(int friendId, int isAccept) {
		return friendDao.acceptFriend(friendId, 1);
	}

	@Override
	@Transactional
	public int rejectFriend(int friendId, int isAccept) {
		return friendDao.rejectFriend(friendId, 2);
	}

	@Override
	public int registAlarm(Alarm alarm) {

		return alarmDao.insertAlarm(alarm);
	}

	@Override
	@Transactional
	public boolean isFriend(String userId, String friendUserId) {
		return friendDao.isFriend(userId, friendUserId);
	}

	@Override
	@Transactional
	public int cutOffFriend(int friendId) {		
		return friendDao.deleteFriend(friendId);
	}
	
	

}

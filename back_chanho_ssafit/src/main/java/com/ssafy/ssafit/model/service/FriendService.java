package com.ssafy.ssafit.model.service;

import com.ssafy.ssafit.model.dto.Alarm;
import com.ssafy.ssafit.model.dto.Friend;

public interface FriendService {
	public int registFriend(Friend friend);
	public int acceptFriend(int friendId,int isAccept);
	public int rejectFriend(int friendId,int isAccept);
	// 알람 생성
	public int registAlarm(Alarm alarm);
	
	public boolean isFriend(String userId, String friendUserId);
	
	public int cutOffFriend(int friendId);
}

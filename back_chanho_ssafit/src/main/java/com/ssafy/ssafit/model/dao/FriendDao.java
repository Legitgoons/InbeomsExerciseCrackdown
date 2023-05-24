package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.Alarm;
import com.ssafy.ssafit.model.dto.Friend;
import com.ssafy.ssafit.model.dto.User;

public interface FriendDao {
	// 친구 신청하기
	public int insertFriend(Friend friend);
	
	public int acceptFriend(int friendId, int isAccept);
	
	public int rejectFriend(int friendId,int isAccept);
	
	// 알람 생성
	public int insertAlarm(Alarm alarm);
	
	// 친구 목록 가져오기
	public List<User> getFriendList(String userId);
	
	 // 친구 확인
    public boolean isFriend(String userId, String friendUserId);

	
	

}

package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.Alarm;
import com.ssafy.ssafit.model.dto.Friend;
import com.ssafy.ssafit.model.dto.User;

public interface FriendDao {
	// 친구 신청하기
	public int insertFriend(Friend friend);
	
	// 친구 신청 승락
	public int acceptFriend(int friendId, int isAccept);
	 // 친구 신청 거절 
	public int rejectFriend(int friendId,int isAccept);
	
	// 알람 생성
	public int insertAlarm(Alarm alarm);
	
	// 친구 목록 가져오기
	public List<User> getFriendList(String userId, String friendUserId);
	
	// 친구 인지 확인
    public boolean isFriend(String userId, String friendUserId);
    
    public int deleteFriend(int friendId);

	
	

}

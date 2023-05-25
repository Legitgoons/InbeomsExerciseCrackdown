package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.Friend;

public interface FriendDao {
	// 친구 신청하기
	public int insertFriend(Friend friend);
	
	// 친구 신청 승락
	public int acceptFriend(int friendId, int isAccept);
	 // 친구 신청 거절 
	public int rejectFriend(int friendId,int isAccept);
	
    // 친구 신청 가져오기
	
	public List<Friend> getSendList(String userId);
	
	// 친구 목록 가져오기
	public List<Friend> getFriendList(String userId);
	
	// 친구 인지 확인
    public int isFriend(String userId, String friendUserId);
    public int isFriendSend(String userId, String friendUserId);

	public int deleteFriend(String userId, String friendUserId);


	
	

} 

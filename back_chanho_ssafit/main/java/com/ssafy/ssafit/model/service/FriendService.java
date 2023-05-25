package com.ssafy.ssafit.model.service;

import java.util.List;

import com.ssafy.ssafit.model.dto.Friend;

public interface FriendService {
	public int registFriend(Friend friend);
	public int acceptFriend(int friendId,int isAccept);
	public int rejectFriend(int friendId,int isAccept);	
	public boolean checkFriend(String userId, String friendUserId);
	public int cutOffFriend(String userId, String friendUserId);
	public List<Friend> getFriendList(String userId);
	public List<Friend> sendFriendList(String userId);
	public boolean checkFriendSend(String userId, String friendUserId);
}

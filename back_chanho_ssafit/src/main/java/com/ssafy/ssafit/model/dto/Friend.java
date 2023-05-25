package com.ssafy.ssafit.model.dto;

public class Friend {
	int friendId;
	String userId;
	String friendUserId;
	int isAccept;
	
	public Friend() {
		
	}
	public Friend(int friendId, String userId, String friendUserId, int isAccept) {
		super();
		this.friendId = friendId;
		this.userId = userId;
		this.friendUserId = friendUserId;
		this.isAccept = isAccept;
	}
	public int getFriendId() {
		return friendId;
	}
	public void setFriendId(int friendId) {
		this.friendId = friendId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getFriendUserId() {
		return friendUserId;
	}
	public void setFriendUserId(String friendUserId) {
		this.friendUserId = friendUserId;
	}
	public int getIsAccept() {
		return isAccept;
	}
	public void setIsAccept(int isAccept) {
		this.isAccept = isAccept;
	}
	
	@Override
	public String toString() {
		return "Friend [friendId=" + friendId + ", userId=" + userId + ", friendUserId=" + friendUserId + ", isAccept="
				+ isAccept + "]";
	}
	
	

}

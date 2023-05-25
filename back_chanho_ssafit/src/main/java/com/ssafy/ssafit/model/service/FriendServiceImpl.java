package com.ssafy.ssafit.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ssafy.ssafit.model.dao.FriendDao;
import com.ssafy.ssafit.model.dto.Friend;

@Service
public class FriendServiceImpl implements FriendService {
	private FriendDao friendDao;



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
	@Transactional
	public boolean checkFriend(String userId, String friendUserId) {
		int count= friendDao.isFriend(userId, friendUserId); 
		if(count>0) {
			return true;
		}
		else {
			return false;
		}
	}
	
    @Override
    @Transactional
    public List<Friend> getFriendList(String userId) {
        return friendDao.getFriendList(userId);
    }

	@Override
	@Transactional
	public int cutOffFriend(String userId, String friendUserId) {		
		return friendDao.deleteFriend(userId,friendUserId);
	}

	
	@Override
	public List<Friend> sendFriendList(String userId) {
		return friendDao.getSendList(userId);
	}

	@Override
	@Transactional
	public boolean checkFriendSend(String userId, String friendUserId) {
		int count= friendDao.isFriendSend(userId, friendUserId); 
		if(count>0) {
			return true;
		}
		else {
			return false;
		}
	}


	
	

}

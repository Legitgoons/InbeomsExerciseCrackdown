package com.ssafy.ssafit.model.dto;

public class Alarm {
	int alarmId;
	String usrId;
	String alarmDate;
	int diaryId;
	int friendId;
	int type;
	int isCheck;
	public Alarm(int alarmId, String usrId, String alarmDate, int diaryId, int friendId, int type, int isCheck) {
		super();
		this.alarmId = alarmId;
		this.usrId = usrId;
		this.alarmDate = alarmDate;
		this.diaryId = diaryId;
		this.friendId = friendId;
		this.type = type;
		this.isCheck = isCheck;
	}
	public int getAlarmId() {
		return alarmId;
	}
	public void setAlarmId(int alarmId) {
		this.alarmId = alarmId;
	}
	public String getUsrId() {
		return usrId;
	}
	public void setUsrId(String usrId) {
		this.usrId = usrId;
	}
	public String getAlarmDate() {
		return alarmDate;
	}
	public void setAlarmDate(String alarmDate) {
		this.alarmDate = alarmDate;
	}
	public int getDiaryId() {
		return diaryId;
	}
	public void setDiaryId(int diaryId) {
		this.diaryId = diaryId;
	}
	public int getFriendId() {
		return friendId;
	}
	public void setFriendId(int friendId) {
		this.friendId = friendId;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	public int getIsCheck() {
		return isCheck;
	}
	public void setIsCheck(int isCheck) {
		this.isCheck = isCheck;
	}
	@Override
	public String toString() {
		return "Alarm [alarmId=" + alarmId + ", usrId=" + usrId + ", alarmDate=" + alarmDate + ", diaryId=" + diaryId
				+ ", friendId=" + friendId + ", type=" + type + ", isCheck=" + isCheck + "]";
	}
	
	

}

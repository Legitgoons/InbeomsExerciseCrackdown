package com.ssafy.ssafit.model.dto;

public class Diary {
	int diaryId;
	String part;
	String userId;
	int weight;
	int reps;
	int exerciseSet;
	String updateDate;
	String date;
	int isDone;
	
	public Diary(int diaryId, String part, String userId, int weight, int reps, int exerciseSet, String updateDate, String date,
			int isDone) {
		super();
		this.diaryId = diaryId;
		this.part = part;
		this.userId = userId;
		this.weight = weight;
		this.reps = reps;
		this.exerciseSet = exerciseSet;
		this.updateDate = updateDate;
		this.date = date;
		this.isDone = isDone;
	}

	public int getDiaryId() {
		return diaryId;
	}

	public void setDiaryId(int diaryId) {
		this.diaryId = diaryId;
	}

	public String getPart() {
		return part;
	}

	public void setPart(String part) {
		this.part = part;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	public int getReps() {
		return reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}

	public int getExerciseSet() {
		return exerciseSet;
	}

	public void setExerciseSet(int exerciseSet) {
		this.exerciseSet = exerciseSet;
	}

	public String getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(String updateDate) {
		this.updateDate = updateDate;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public int getIsDone() {
		return isDone;
	}

	public void setIsDone(int isDone) {
		this.isDone = isDone;
	}

	@Override
	public String toString() {
		return "Diary [diaryId=" + diaryId + ", part=" + part + ", userId=" + userId + ", weight=" + weight + ", reps="
				+ reps + ", exerciseSet=" + exerciseSet + ", updateDate=" + updateDate + ", date=" + date + ", isDone=" + isDone + "]";
	}
	

	
}

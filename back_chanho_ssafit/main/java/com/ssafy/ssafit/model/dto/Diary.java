package com.ssafy.ssafit.model.dto;

public class Diary {
	int diaryId;
	String part;
	String userId;
	String title;
	int weight;
	int reps;
	int exerciseSet;
	int isDone;

	public Diary() {

	}

	public Diary(int diaryId, String part, String userId, String title, int weight, int reps, int exerciseSet,
			int isDone) {
		super();
		this.diaryId = diaryId;
		this.part = part;
		this.userId = userId;
		this.title = title;
		this.weight = weight;
		this.reps = reps;
		this.exerciseSet = exerciseSet;
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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public int getIsDone() {
		return isDone;
	}

	public void setIsDone(int isDone) {
		this.isDone = isDone;
	}

	@Override
	public String toString() {
		return "Diary [diaryId=" + diaryId + ", part=" + part + ", userId=" + userId + ", title=" + title + ", weight="
				+ weight + ", reps=" + reps + ", exerciseSet=" + exerciseSet + ", isDone=" + isDone + "]";
	}

}

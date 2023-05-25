package com.ssafy.ssafit.model.dto;

public class Exercise {
	int exerciseId;
	String part;
	String youtubeId;
	String title;
	String content;
	
	public Exercise() {
		
	}
	public Exercise(int exerciseId, String part, String youtubeId,String title,String content) {
		super();
		this.exerciseId = exerciseId;
		this.part = part;
		this.youtubeId = youtubeId;
		this.title= title;
		this.content=content;
	}

	public int getExerciseId() {
		return exerciseId;
	}

	public void setExerciseId(int exerciseId) {
		this.exerciseId = exerciseId;
	}

	public String getPart() {
		return part;
	}

	public void setPart(String part) {
		this.part = part;
	}

	public String getYoutubeId() {
		return youtubeId;
	}

	public void setYoutubeId(String youtubeId) {
		this.youtubeId = youtubeId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "Exercise [exerciseId=" + exerciseId + ", part=" + part + ", youtubeId=" + youtubeId + ", title=" + title
				+ ", content=" + content + "]";
	}

	
	
	


	
	
	

}

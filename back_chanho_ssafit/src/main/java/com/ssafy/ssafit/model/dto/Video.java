package com.ssafy.ssafit.model.dto;

public class Video {
	
	String title;
	String part;
	String youtubeId;
	String channelName;
	
	public Video(String title, String part, String youtubeId, String channelName) {
		super();
		this.title = title;
		this.part = part;
		this.youtubeId = youtubeId;
		this.channelName = channelName;
	
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
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

	public String getChannelName() {
		return channelName;
	}

	public void setChannelName(String channelName) {
		this.channelName = channelName;
	}

	@Override
	public String toString() {
		return "Video [title=" + title + ", part=" + part + ", youtubeId=" + youtubeId + ", channelName=" + channelName
				+ "]";
	}
	


}

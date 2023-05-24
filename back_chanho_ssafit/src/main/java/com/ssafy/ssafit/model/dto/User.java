package com.ssafy.ssafit.model.dto;

public class User {
	String id;
	String password;
	String name;
	int isAdmin;
	public User() {
		
	}
	public User(String id, String password, String name,int isAdmin) {
		super();
		this.id = id;
		this.password = password;
		this.name = name;
		this.isAdmin = isAdmin;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getIsAdmin() {
		return isAdmin;
	}
	public void setIsAdmin(int isAdmin) {
		this.isAdmin = isAdmin;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

}

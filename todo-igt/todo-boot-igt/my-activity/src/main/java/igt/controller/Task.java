package igt.controller;


public class Task {
	
private String id;
private String name;
private boolean isCompleted	;

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}
public boolean isCompleted() {
	return isCompleted;
}
public void setCompleted(boolean isCompleted) {
	this.isCompleted = isCompleted;
}

}

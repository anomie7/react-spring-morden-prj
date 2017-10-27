package com.modern.be.web;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class Post {
	public Post() {};
	
	public Post(String subject, String writer, String createDate, String content, String category) {
		super();
		this.subject = subject;
		this.writer = writer;
		this.createDate = createDate;
		this.content = content;
		this.category = category;
	}

	@Id @GeneratedValue(strategy = GenerationType.AUTO)
	private Long postId;
	
	@Version @JsonIgnore Long version;
	
	private String subject;
	private String writer;
	private String createDate;
	private String content;
	private String category;
}

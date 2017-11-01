package com.modern.be;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.modern.be.web.Post;
import com.modern.be.web.PostRepository;

@Component
public class DatabaseLoader implements CommandLineRunner {
	private static final Logger logger = LoggerFactory.getLogger(DatabaseLoader.class);
	
	@Autowired
	private PostRepository repository;
	
	@Override
	public void run(String... args) throws Exception {
		repository.save(new Post("안녕하세요", "anomie7", "2011-11-11 09:11:23", "오 방가!!!", "프로그래밍"));
		repository.save(new Post("안녕하", "anomie7", "2012-12-11 09:11:23", "오 방가!!!", "홈"));
		repository.save(new Post("안녕하세", "anomie7", "2013-09-11 09:11:23", "오 방가!!!", "리뷰"));
		repository.save(new Post("안녕하세요", "anomie7", "2014-01-11 09:11:23", "오 방가!!!", "프로그래밍"));
		logger.info("DatabaseLoader On!");
	}

}

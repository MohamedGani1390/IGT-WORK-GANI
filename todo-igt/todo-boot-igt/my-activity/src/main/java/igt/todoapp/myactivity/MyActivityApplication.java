package igt.todoapp.myactivity;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication (scanBasePackages = {"igt.controller"})
public class MyActivityApplication {
	public static void main(String[] args) {
		SpringApplication.run(MyActivityApplication.class, args);
	}
		
}

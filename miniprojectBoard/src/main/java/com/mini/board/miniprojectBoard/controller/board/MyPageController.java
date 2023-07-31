package com.mini.board.miniprojectBoard.controller.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.service.board.MyPageService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/mypage")
@RequiredArgsConstructor
public class MyPageController {

	private final MyPageService myPageService;
	
	@GetMapping("/{userId}")
	public ResponseEntity<?> getMyBoards(@PathVariable int userId) {
		
		return ResponseEntity.ok().body(myPageService.getMyBoards(userId));
	}
}

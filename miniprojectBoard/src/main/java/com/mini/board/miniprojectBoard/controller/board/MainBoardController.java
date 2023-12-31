package com.mini.board.miniprojectBoard.controller.board;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.dto.board.request.SearchBoardRequestDto;
import com.mini.board.miniprojectBoard.service.board.MainBoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
public class MainBoardController {

	private final MainBoardService mainBoardService;
	
	@GetMapping("/userinfo")
	public ResponseEntity<?> getUserInfo(){
		
		return ResponseEntity.ok().body(mainBoardService.getUserInfo());
	}

	@GetMapping("/board")
	public ResponseEntity<?> getBoards(SearchBoardRequestDto searchBoardRequestDto) {
		
		return ResponseEntity.ok().body(mainBoardService.getBoards(searchBoardRequestDto));
	}
	
	@PostMapping("/board/views")
	public ResponseEntity<?> increaseViews(@RequestBody Map<String, Object> boardData) {

		return ResponseEntity.ok().body(mainBoardService.increaseViews(boardData));
	}
	
	@GetMapping("/board/comment/count")
	public ResponseEntity<?> commentCount(){
		return ResponseEntity.ok().body(mainBoardService.commentCount());
	}
	
	
	@GetMapping("/test")
	public ResponseEntity<?> test() {
		return ResponseEntity.ok().body(mainBoardService.test());
	}
}

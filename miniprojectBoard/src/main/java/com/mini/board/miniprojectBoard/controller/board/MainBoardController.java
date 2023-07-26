package com.mini.board.miniprojectBoard.controller.board;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.service.board.MainBoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/main")
@RequiredArgsConstructor
public class MainBoardController {

	private final MainBoardService mainBoardService;
	
	@GetMapping("/board")
	public ResponseEntity<?> getBoards(int page) {

//		System.out.println(page);
		return ResponseEntity.ok().body(mainBoardService.getBoards(page));
//		return null;
	}
	
	@PostMapping("/board/views")
	public ResponseEntity<?> increaseViews(@RequestBody Map<String, Object> boardData) {

		return ResponseEntity.ok().body(mainBoardService.increaseViews(boardData));
	}
}

package com.mini.board.miniprojectBoard.controller.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
	public ResponseEntity<?> getBoards() {
		
		return ResponseEntity.ok().body(mainBoardService.getBoards());
	}
}

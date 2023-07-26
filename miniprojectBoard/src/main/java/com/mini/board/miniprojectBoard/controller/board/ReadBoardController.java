package com.mini.board.miniprojectBoard.controller.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.service.board.MainBoardService;
import com.mini.board.miniprojectBoard.service.board.ReadBoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/read")
@RequiredArgsConstructor
public class ReadBoardController {

	private final ReadBoardService readBoardService;
	@GetMapping("/board")
	public ResponseEntity<?> readBoard(@RequestParam int boardId){
		
		return ResponseEntity.ok().body(readBoardService.readBoard(boardId));
	}
}

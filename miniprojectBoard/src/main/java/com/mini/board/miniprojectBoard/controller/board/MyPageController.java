package com.mini.board.miniprojectBoard.controller.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.dto.board.request.WriteBoardRequestDto;
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
	
	@DeleteMapping("/delete")
	public ResponseEntity<?> deleteMyBoard(int boardId) {
		return ResponseEntity.ok().body(myPageService.deleteMyBoard(boardId));
	}
	
	@PostMapping("/modify/{boardId}")
	public ResponseEntity<?> deleteMyBoard(@PathVariable int boardId, @RequestBody WriteBoardRequestDto writeBoardRequestDto  ) {
//		System.out.println(boardId +  " + " +  writeBoardRequestDto);
		return ResponseEntity.ok().body(myPageService.modifyMyboard(boardId, writeBoardRequestDto));
	}
}

package com.mini.board.miniprojectBoard.controller.board;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.dto.board.request.CommentRequestDto;
import com.mini.board.miniprojectBoard.dto.board.request.ModifyCommentRequestDto;
import com.mini.board.miniprojectBoard.service.board.ReadBoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/read")
@RequiredArgsConstructor
public class ReadBoardController {

	private final ReadBoardService readBoardService;
	
	@GetMapping("/board")
	public ResponseEntity<?> readBoard(int boardId) {
		
		return ResponseEntity.ok().body(readBoardService.readBoard(boardId));
	}
	
	@PostMapping("/board/comment")
	public ResponseEntity<?> registerComment(@RequestBody CommentRequestDto commentRequestDto) {

		return ResponseEntity.ok().body(readBoardService.registerComment(commentRequestDto));
	}
	
	@GetMapping("/get/comments")
	public ResponseEntity<?> getComments(int boardId){
		
		return ResponseEntity.ok().body(readBoardService.getComments(boardId));
	}
	
	@DeleteMapping("/board/comment/delete")
	public ResponseEntity<?> deleteComment(int commentId){
	
		return ResponseEntity.ok().body(readBoardService.deleteComment(commentId));
	}
	
	@PostMapping("/board/comment/modify")
	public ResponseEntity<?> modifyComment(@RequestBody ModifyCommentRequestDto modifyCommentRequestDto){
		
		return ResponseEntity.ok().body(readBoardService.modifyComment(modifyCommentRequestDto));
	}
	
}

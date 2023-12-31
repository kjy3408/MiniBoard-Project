package com.mini.board.miniprojectBoard.controller.board;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.dto.board.request.CommentRequestDto;
import com.mini.board.miniprojectBoard.dto.board.request.ModifyCommentRequestDto;
import com.mini.board.miniprojectBoard.dto.board.request.ReplyCommentRequestDto;
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
	public ResponseEntity<?> deleteComment(int commentId, int boardId){
		return ResponseEntity.ok().body(readBoardService.deleteComment(commentId, boardId));
	}
	
	@PostMapping("/board/comment/modify")
	public ResponseEntity<?> modifyComment(@RequestBody ModifyCommentRequestDto modifyCommentRequestDto){
		return ResponseEntity.ok().body(readBoardService.modifyComment(modifyCommentRequestDto));
	}
	
	@PostMapping("/board/replycomment")
	public ResponseEntity<?> registerReplyComment(@RequestBody ReplyCommentRequestDto replyCommentRequestDto){
		return ResponseEntity.ok().body(readBoardService.registerReplyComment(replyCommentRequestDto));
	}
	
	@GetMapping("/replycomment")
	public ResponseEntity<?> getReplyComment(int getCommentId){
		return ResponseEntity.ok().body(readBoardService.getReplyComment(getCommentId));
	}
	
	@DeleteMapping("/delete/replycomment")
	public ResponseEntity<?> deleteReplyComment(int replyCommentId){
		return ResponseEntity.ok().body(readBoardService.deleteReplyComment(replyCommentId));
	}
	
	@PostMapping("/like")
	public ResponseEntity<?> addLike(@RequestBody int boardId){
		return ResponseEntity.ok().body(readBoardService.addLike(boardId));
	}

	@DeleteMapping("/dislike")
	public ResponseEntity<?> disLike(int boardId){
		return ResponseEntity.ok().body(readBoardService.disLike(boardId));
	}
	
	@GetMapping("/like/flag")
	public ResponseEntity<?> addLikeFlag(int boardId) {
		return ResponseEntity.ok().body(readBoardService.addLikeFlag(boardId));
	}
	
}

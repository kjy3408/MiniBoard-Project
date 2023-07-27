package com.mini.board.miniprojectBoard.entity;

import com.mini.board.miniprojectBoard.dto.board.response.CommentResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Comment {

	private int commentId;
	private String comment;
	private boolean flag;
	
	private User user;
	private Board board;
	
	public CommentResponseDto toDto() {
		return CommentResponseDto.builder().commentId(commentId)
											.comment(comment)
											.userId(user.getUserId())
											.username(user.getUsername())
											.nickname(user.getNickname())
											.boardId(board.getBoardId())
											.boardTitle(board.getBoardTitle())
											.boardDate(board.getBoardDate())
											.boardViews(board.getBoardViews())
											.flag(flag)
											.build();
	}
}

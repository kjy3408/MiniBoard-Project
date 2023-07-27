package com.mini.board.miniprojectBoard.dto.board.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentResponseDto {
	private int commentId;
	private String comment;
	private int userId;
	private String username;
	private String nickname;
	private int boardId;
	private String boardTitle;
	private String boardDate;
	private int boardViews;
	private boolean flag;
}

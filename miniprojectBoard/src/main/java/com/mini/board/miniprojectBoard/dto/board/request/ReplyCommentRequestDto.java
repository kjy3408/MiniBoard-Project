package com.mini.board.miniprojectBoard.dto.board.request;

import lombok.Data;

@Data
public class ReplyCommentRequestDto {

	private int commentId;
	private String replyComment;
	private int boardId;
}

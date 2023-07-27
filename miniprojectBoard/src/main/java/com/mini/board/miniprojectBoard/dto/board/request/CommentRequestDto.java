package com.mini.board.miniprojectBoard.dto.board.request;

import lombok.Data;

@Data
public class CommentRequestDto {

	private int boardId;
	private String comment;
}

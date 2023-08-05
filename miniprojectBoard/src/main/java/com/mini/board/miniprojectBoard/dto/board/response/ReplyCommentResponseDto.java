package com.mini.board.miniprojectBoard.dto.board.response;

import lombok.Data;

@Data
public class ReplyCommentResponseDto {
	
	private int replyCommentId;
	private String replyComment;
	private String replyCommentDate;
	private int commentId;
	private String comment;
	private int boardId;
	private String boardTitle;
	private String boardContent;
	private String boardDate;
	private int userId;
	private String username;
	private String nickname;
	private boolean flag;
}

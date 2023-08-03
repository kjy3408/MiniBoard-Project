package com.mini.board.miniprojectBoard.dto.board.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AlreadyReadBoardResponseDto {

	private int userId;
	private String username;
	private String nickname;
	private int readId;
	private String readDate;
	private int boardId;
	private String boardTitle;
	private String boardContent;
	private String boardDate;
	private int boardViews;
	private int boardModifyFlag;
	private String registerUserId;
	private String registerUsername;
	private String registerNickname;
}

package com.mini.board.miniprojectBoard.dto.board.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReadBoardResponseDto {

	private int boardId;
	private String boardTitle;
	private String boardContent;
	private String boardDate;
	private int boardViews;
	private int userId;
	private String username;
	private String nickname;
}
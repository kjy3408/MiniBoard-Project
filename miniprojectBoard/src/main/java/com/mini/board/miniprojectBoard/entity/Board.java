package com.mini.board.miniprojectBoard.entity;

import com.mini.board.miniprojectBoard.dto.board.response.MainBoardResponseDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Board {

	private int boardId;
	private String boardTitle;
	private String boardContent;
	private String boardDate;
	private int boardViews;
	private User user;
	
	public MainBoardResponseDto toDto() {
		return MainBoardResponseDto.builder().boardId(boardId)
											.boardTitle(boardTitle)
											.boardContent(boardContent)
											.boardDate(boardDate)
											.userId(user.getUserId())
											.username(user.getUsername())
											.nickname(user.getNickname())
											.build();
	}
}

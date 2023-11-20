package com.mini.board.miniprojectBoard.entity;

import com.mini.board.miniprojectBoard.dto.board.response.MainBoardResponseDto;
import com.mini.board.miniprojectBoard.dto.board.response.ReadBoardResponseDto;

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
	private boolean boardModifyFlag;
	private User user;
	private int commentCount;
	private int likeCount;
	
	public MainBoardResponseDto toDto() {
		return MainBoardResponseDto.builder().boardId(boardId)
											.boardTitle(boardTitle)
											.boardContent(boardContent)
											.boardDate(boardDate)
											.boardViews(boardViews)
											.boardModifyFlag(boardModifyFlag)
											.userId(user.getUserId())
											.username(user.getUsername())
											.nickname(user.getNickname())
											.commentCount(commentCount)
											.likeCount(likeCount)
											.build();
	}
	
	public ReadBoardResponseDto toReadBoardDto() {
		return ReadBoardResponseDto.builder().boardId(boardId)
											.boardTitle(boardTitle)
											.boardContent(boardContent)
											.boardDate(boardDate)
											.boardViews(boardViews)
//											.boardModifyFlag(boardModifyFlag)
											.userId(user.getUserId())
											.username(user.getUsername())
											.nickname(user.getNickname())
											.commentCount(commentCount)
											.likeCount(likeCount)
											.build();
	}
}

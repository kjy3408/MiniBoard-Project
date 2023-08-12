package com.mini.board.miniprojectBoard.dto.auth;

import lombok.Data;

@Data
public class FindPasswordRequestDto {
	private String username;
	private String questionId;
	private String findPasswordAnswer;
}

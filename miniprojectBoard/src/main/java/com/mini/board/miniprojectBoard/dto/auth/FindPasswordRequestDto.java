package com.mini.board.miniprojectBoard.dto.auth;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class FindPasswordRequestDto {
	@NotBlank(message = "아이디을 입력하세요.")
	private String username;
	@NotBlank(message = "질문을 선택하세요.")
	private String questionId;
	@NotBlank(message = "답변을 입력하세요.")
	private String findPasswordAnswer;
}

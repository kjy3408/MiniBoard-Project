package com.mini.board.miniprojectBoard.dto.auth;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class FindUsernameRequestDto {

	@NotBlank(message = "닉네임을 입력하세요.")
	private String nickname;
	@NotBlank(message = "질문을 선택하세요.")
	private String questionId;
	@NotBlank(message = "답변을 입력하세요.")
	private String findUsernameAnswer;
}

package com.mini.board.miniprojectBoard.dto.auth;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class LoginReqDto {
	
	@NotBlank(message = "ID를 입력하세요.")
	private String username;
	
	@NotBlank(message = "비밀번호를 입력하세요.")
	private String password;
}

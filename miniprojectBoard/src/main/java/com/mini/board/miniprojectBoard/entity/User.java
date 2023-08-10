package com.mini.board.miniprojectBoard.entity;

import java.util.List;

import com.mini.board.miniprojectBoard.dto.board.response.UserInfoResponseDto;
import com.mini.board.miniprojectBoard.security.PrincipalUser;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class User {
	private int userId;
	private String username;
	private String password;
	private String nickname;
	private String questionId;
	private String answer;
	
	private List<Authority> authorities;
	
	public PrincipalUser toPrincipal() {
		return PrincipalUser.builder()
				.userId(userId)
				.username(username)
				.password(password)
				.nickname(nickname)
				.questionId(questionId)
				.answer(answer)
				.authorities(authorities)
				.build();
	}
	
	public UserInfoResponseDto toDto() {
		return UserInfoResponseDto.builder().userId(userId)
											.username(username)
											.nickname(nickname)
											.questionId(questionId)
											.answer(answer)
											.build();
	}
	
}

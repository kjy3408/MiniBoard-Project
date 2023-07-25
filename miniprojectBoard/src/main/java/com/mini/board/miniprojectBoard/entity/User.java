package com.mini.board.miniprojectBoard.entity;

import java.util.List;

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
	
	private List<Authority> authorities;
	
	public PrincipalUser toPrincipal() {
		return PrincipalUser.builder()
				.userId(userId)
				.username(username)
				.password(password)
				.nickname(nickname)
				.authorities(authorities)
				.build();
	}
	
}

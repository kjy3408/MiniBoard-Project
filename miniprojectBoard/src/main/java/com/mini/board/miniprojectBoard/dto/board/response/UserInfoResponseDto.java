package com.mini.board.miniprojectBoard.dto.board.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserInfoResponseDto {

	private int userId;
	private String username;
	private String nickname;
	private String questionId;
	private String answer;
}

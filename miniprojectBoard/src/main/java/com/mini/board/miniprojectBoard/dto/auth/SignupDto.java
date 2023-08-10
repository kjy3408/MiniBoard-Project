package com.mini.board.miniprojectBoard.dto.auth;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.mini.board.miniprojectBoard.entity.User;

import lombok.Data;

@Data
public class SignupDto {
	
	@Pattern(regexp ="^[0-9a-zA-Z]{5,16}$",
			message = "아이디는 영문자, 숫자를 포함하여 5 ~ 16자로 작성하세요.")
	@NotBlank(message = "ID를 입력하세요.")
	private String username;
	
	@Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$", 
			message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성하세요.")
	@NotBlank(message = "비밀번호를 입력하세요.")
	private String password;
	
	@NotBlank(message = "비밀번호를 입력하세요.")
	private String checkPassword;
	
	@Pattern(regexp = "^[가-힣a-zA-Z0-9]{2,6}$",
			message = "닉네임은 한글 또는 영문,숫자 2 ~ 6자로 작성하세요.")
	@NotBlank(message = "닉네임을 입력하세요.")
	private String nickname;
	
	@NotBlank(message = "질문을 선택하세요.")
	private String questionId;
	
	@NotBlank(message = "답변을 입력하세요.")
	private String answer;
	
	public User toEntity() {
		return User.builder()
				.username(username)
				.password(new BCryptPasswordEncoder().encode(password))
				.nickname(nickname)
				.questionId(questionId)
				.answer(answer)
				.build();
	}
}

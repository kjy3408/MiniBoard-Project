package com.mini.board.miniprojectBoard.dto.auth;

import javax.validation.constraints.Pattern;

import lombok.Data;

@Data
public class PasswordChangeDto {
	
//	@NotBlank(message = "비밀번호를 입력하세요.")
	private String oldPassword;
	
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$", 
            message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성하세요.")
    private String newPassword;
    
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{8,16}$", 
            message = "비밀번호는 영문자, 숫자, 특수문자를 포함하여 8 ~ 16자로 작성하세요.")
    private String checkPassword;
}

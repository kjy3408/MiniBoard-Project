package com.mini.board.miniprojectBoard.dto.board.request;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModifyBoardRequestDto {


	@NotBlank(message = "제목을 입력하세요.")
	private String modifyTitle;
	
	@NotBlank(message = "내용을 입력하세요.")
	private String modifyContent;
}

package com.mini.board.miniprojectBoard.dto.board.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModifyCommentRequestDto {

	private int boardId;
	private int commentId;
	private String modifyComment;
}

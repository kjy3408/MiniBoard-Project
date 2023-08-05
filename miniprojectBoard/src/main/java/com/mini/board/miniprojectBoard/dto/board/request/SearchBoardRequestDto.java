package com.mini.board.miniprojectBoard.dto.board.request;

import lombok.Data;

@Data
public class SearchBoardRequestDto {

	private int page;
	private String searchValue;
}

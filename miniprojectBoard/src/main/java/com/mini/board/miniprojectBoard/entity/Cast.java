package com.mini.board.miniprojectBoard.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cast {

	private int castId;
	private String castName;
	private String castRole;
	private String charactor;
}

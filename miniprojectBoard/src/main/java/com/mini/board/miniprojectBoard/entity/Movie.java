package com.mini.board.miniprojectBoard.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Movie {

	private int movieId;
	private String movieTitle;
	private List<Cast> cast;
	private List<Country> country;
}

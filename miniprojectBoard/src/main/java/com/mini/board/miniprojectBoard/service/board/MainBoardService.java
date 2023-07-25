package com.mini.board.miniprojectBoard.service.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.dto.board.response.MainBoardResponseDto;
import com.mini.board.miniprojectBoard.repository.MainBoardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainBoardService {

	private final MainBoardRepository mainBoardRepository;
	
	public List<MainBoardResponseDto> getBoards() {
	
		List<MainBoardResponseDto> list = new ArrayList<>();
		
		mainBoardRepository.getBoards().forEach(board -> {
			list.add(board.toDto());
		});
		return list;
	}
}

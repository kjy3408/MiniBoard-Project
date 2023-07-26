package com.mini.board.miniprojectBoard.service.board;

import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.entity.Board;
import com.mini.board.miniprojectBoard.repository.ReadBoardRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReadBoardService {

	private final ReadBoardRepository readBoardRepository;
	
	public Board readBoard(int boardId) {
		System.out.println(readBoardRepository.readboard(boardId));
		
		return readBoardRepository.readboard(boardId);
	}
}
package com.mini.board.miniprojectBoard.service.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.dto.board.request.WriteBoardRequestDto;
import com.mini.board.miniprojectBoard.dto.board.response.MainBoardResponseDto;
import com.mini.board.miniprojectBoard.repository.MyPageRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MyPageService {

	private final MyPageRepository myPageRepository;
	
	public List<MainBoardResponseDto> getMyBoards(int userId) {
		List<MainBoardResponseDto> myBoardList = new ArrayList<>();
		
		myPageRepository.getMyBoards(userId).forEach(myBoard -> {
			myBoardList.add(myBoard.toDto());
		});
		
		return myBoardList;
	}
	
	public int deleteMyBoard(int boardId) {
		
		myPageRepository.deleteMyBoardComment(boardId);
		myPageRepository.deleteMyBoard(boardId);
		return 1;
	}
	
	public int modifyMyboard(int boardId, WriteBoardRequestDto writeBoardRequestDto) {
		Map<String, Object> modifyBoardMap = new HashMap<>();
		
		modifyBoardMap.put("boardId", boardId);
		modifyBoardMap.put("title", writeBoardRequestDto.getTitle());
		modifyBoardMap.put("content", writeBoardRequestDto.getContent());
		
		myPageRepository.modifyMyBoard(modifyBoardMap);
		return 1;
	}
}

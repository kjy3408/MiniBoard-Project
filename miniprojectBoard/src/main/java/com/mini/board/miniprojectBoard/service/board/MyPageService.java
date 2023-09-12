package com.mini.board.miniprojectBoard.service.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.dto.board.request.ModifyBoardRequestDto;
import com.mini.board.miniprojectBoard.dto.board.response.AlreadyReadBoardResponseDto;
import com.mini.board.miniprojectBoard.dto.board.response.MainBoardResponseDto;
import com.mini.board.miniprojectBoard.dto.board.response.MyPageInfoDataResponseDto;
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
		myPageRepository.deleteReadBoard(boardId);
		return 1;
	}
	
	public int modifyMyboard(int boardId, ModifyBoardRequestDto modifyBoardRequestDto) {
		Map<String, Object> modifyBoardMap = new HashMap<>();
		
		modifyBoardMap.put("boardId", boardId);
		modifyBoardMap.put("title", modifyBoardRequestDto.getModifyTitle());
		modifyBoardMap.put("content", modifyBoardRequestDto.getModifyContent());
		
		myPageRepository.modifyMyBoard(modifyBoardMap);
		return 1;
	}
	
	public List<AlreadyReadBoardResponseDto> getAlreadyReadBoard(int userId){
		return myPageRepository.getAlreadyReadBoard(userId);
	}
	
	public List<Map<String, Integer>> getMyInfoData(int userId){
		List<Map<String, Integer>> countList = new ArrayList<>();
		
		countList.add(myPageRepository.registerBoardCount(userId));
		countList.add(myPageRepository.readBoardCount(userId));
		
		return countList;
	}
	
	public int AlreadyReadDeleteAll(int userId) {
		myPageRepository.AlreadyReadDeleteAll(userId);
		return 1;
	}
}

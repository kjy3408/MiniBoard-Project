package com.mini.board.miniprojectBoard.service.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.dto.board.request.MainBoardRequestDto;
import com.mini.board.miniprojectBoard.dto.board.response.MainBoardResponseDto;
import com.mini.board.miniprojectBoard.repository.MainBoardRepository;
import com.mini.board.miniprojectBoard.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainBoardService {

	private final MainBoardRepository mainBoardRepository;
	
	public Map<String, Object> getBoards(int page) {
		List<MainBoardResponseDto> list = new ArrayList<>();
		Map<String, Object>map = new HashMap<>();
		
		int index = (page- 1) * 15;
		
//		map.put("index", index);
//		map.put("searchValue", mainBoardRequestDto.getSearchValues());
		
		mainBoardRepository.getBoards(index).forEach(board -> {
			list.add(board.toDto());
		});
		
		int totalCount = mainBoardRepository.getTotalCount(index);
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("totalCount", totalCount);
		responseMap.put("boards", list);
		
		System.out.println(responseMap);
		
		return responseMap;
	}
	
	
	public int increaseViews(Map<String, Object> boardData) {
	    Map<String, Object> map = new HashMap<>();
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();	    

		map.put("userId", principalUser.getUserId());
		map.put("boardId", boardData.get("boardId"));
	    
		mainBoardRepository.readBoard(map);
//		System.out.println(mainBoardRepository.alreadyReadBoard(map).size());
		if(mainBoardRepository.alreadyReadBoard(map).size() <= 1) {
			mainBoardRepository.increaseViews(boardData);			
			System.out.println("안읽은글");
		} else {
			System.out.println("이미읽음");
			return 0;
		}
	    return 1;
	}


}

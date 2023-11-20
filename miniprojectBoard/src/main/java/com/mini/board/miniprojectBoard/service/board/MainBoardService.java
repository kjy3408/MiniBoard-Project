package com.mini.board.miniprojectBoard.service.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.dto.board.request.SearchBoardRequestDto;
import com.mini.board.miniprojectBoard.dto.board.response.MainBoardResponseDto;
import com.mini.board.miniprojectBoard.dto.board.response.UserInfoResponseDto;
import com.mini.board.miniprojectBoard.entity.Cast;
import com.mini.board.miniprojectBoard.repository.MainBoardRepository;
import com.mini.board.miniprojectBoard.security.PrincipalUser;

import ch.qos.logback.core.recovery.ResilientSyslogOutputStream;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MainBoardService {

	private final MainBoardRepository mainBoardRepository;
	
	public UserInfoResponseDto getUserInfo(){
		
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();	    
	    
		Map<String, Object> userIdMap = new HashMap<>();
		
		userIdMap.put("userId", principalUser.getUserId());
		
		return mainBoardRepository.getUserInfo(userIdMap).toDto();
	}
	
	public Map<String, Object> getBoards(SearchBoardRequestDto searchBoardRequestDto) {
		List<MainBoardResponseDto> list = new ArrayList<>();
		Map<String, Object>searchBoardMap = new HashMap<>();
		
		searchBoardMap.put("index", (searchBoardRequestDto.getPage()- 1) * 15);
		searchBoardMap.put("searchValue", searchBoardRequestDto.getSearchValue());
		
		mainBoardRepository.getBoards(searchBoardMap).forEach(board -> {
			list.add(board.toDto());
		});
		
		int totalCount = mainBoardRepository.getTotalCount(searchBoardMap);
		Map<String, Object> responseMap = new HashMap<>();
		responseMap.put("totalCount", totalCount);
		responseMap.put("boards", list);
		
		return responseMap;
	}
	
	
	public int increaseViews(Map<String, Object> boardData) {
	    Map<String, Object> map = new HashMap<>();
	    	   
	    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();	    

		map.put("userId", principalUser.getUserId());
		map.put("boardId", boardData.get("boardId"));
	    
		mainBoardRepository.readBoard(map);
		
		if(mainBoardRepository.alreadyReadBoard(map).size() <= 1) {
			mainBoardRepository.increaseViews(boardData);			
		} else {		
			return 0;
		}
	    return 1;
	}
	
	public int commentCount() {
		
		return mainBoardRepository.commentCount();
	}
	
	public Map<String, Object> test () {
		Map<String, Object> map = new HashMap<>();
		System.out.println(mainBoardRepository.test().get(0));
		map.put("movieData", mainBoardRepository.test().get(0));
		
		return map;
	}
	
}

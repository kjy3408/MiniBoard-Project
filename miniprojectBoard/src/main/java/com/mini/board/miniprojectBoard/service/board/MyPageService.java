package com.mini.board.miniprojectBoard.service.board;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

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
}

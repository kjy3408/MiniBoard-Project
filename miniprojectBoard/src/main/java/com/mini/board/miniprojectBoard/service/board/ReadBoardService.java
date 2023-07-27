package com.mini.board.miniprojectBoard.service.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.dto.board.request.CommentRequestDto;
import com.mini.board.miniprojectBoard.dto.board.response.CommentResponseDto;
import com.mini.board.miniprojectBoard.dto.board.response.ReadBoardResponseDto;
import com.mini.board.miniprojectBoard.repository.ReadBoardRepository;
import com.mini.board.miniprojectBoard.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReadBoardService {

	private final ReadBoardRepository readBoardRepository;
	
	public ReadBoardResponseDto readBoard(int boardId) {
		
		return readBoardRepository.readBoard(boardId).toReadBoardDto();
	}
	
	public int registerComment(CommentRequestDto commentRequestDto) {
		Map<String,Object> commentMap = new HashMap<>();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();	    
		
		commentMap.put("comment", commentRequestDto.getComment());
		commentMap.put("boardId", commentRequestDto.getBoardId());
		commentMap.put("userId", principalUser.getUserId());
//		System.out.println(commentMap);
		readBoardRepository.registerComment(commentMap);
		return 0;
	}
	
	public List<CommentResponseDto> getComments(int boardId){
		List<CommentResponseDto> list = new ArrayList<>();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();	    
		
		readBoardRepository.getComment(boardId).forEach(data -> {
			list.add(data.toDto());
		});
		
		for(int i = 0; i < list.size(); i++) {
			if(list.get(i).getUserId() == principalUser.getUserId()) {
				list.get(i).setFlag(true);
			}
		}
		
		return list;
	}
	
	public boolean myCommentFlag() {
		
		return false;
	}
	
	public int deleteComment(int commentId) {
		
		return readBoardRepository.deleteComment(commentId);
	}
}
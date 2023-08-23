package com.mini.board.miniprojectBoard.service.board;

import java.util.HashMap;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.dto.board.request.WriteBoardRequestDto;
import com.mini.board.miniprojectBoard.repository.WriteBoardRepository;
import com.mini.board.miniprojectBoard.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class WriteBoardService {

	private final WriteBoardRepository writeBoardRepository;
	
	public int writeBoard(WriteBoardRequestDto writeBoardRequestDto) {
		Map<String, Object> map = new HashMap<>();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
		PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
		System.out.println("authentication: " + authentication);
		System.out.println("principalUser: " + principalUser);
		map.put("title", writeBoardRequestDto.getTitle());
		map.put("content", writeBoardRequestDto.getContent());
		map.put("userId", principalUser.getUserId());
		
		writeBoardRepository.writeBoard(map);
		
		return 1;
	}
}

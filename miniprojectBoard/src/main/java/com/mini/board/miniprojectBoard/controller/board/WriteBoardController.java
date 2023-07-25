package com.mini.board.miniprojectBoard.controller.board;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.aop.annotation.ValidAspect;
import com.mini.board.miniprojectBoard.dto.board.request.WriteBoardRequestDto;
import com.mini.board.miniprojectBoard.service.board.WriteBoardService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/write")
@RequiredArgsConstructor
public class WriteBoardController {

	private final WriteBoardService writeBoardService;
	
	@ValidAspect
	@PostMapping("/board")
	public ResponseEntity<?> writeBoard(@Valid @RequestBody WriteBoardRequestDto writeBoardRequestDto, BindingResult bindingResult) {
		
		return ResponseEntity.ok().body(writeBoardService.writeBoard(writeBoardRequestDto));
	}
}


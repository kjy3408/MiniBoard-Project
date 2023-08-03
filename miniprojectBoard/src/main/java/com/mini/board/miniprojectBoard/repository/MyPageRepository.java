package com.mini.board.miniprojectBoard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.mini.board.miniprojectBoard.dto.board.response.AlreadyReadBoardResponseDto;
import com.mini.board.miniprojectBoard.entity.Board;

@Mapper
public interface MyPageRepository {

	public List<Board> getMyBoards(int userId);
	public int deleteMyBoardComment(int boardId);
	public int deleteMyBoard(int boardId);
	public int deleteReadBoard(int boardId);
	public int modifyMyBoard(Map<String, Object> modifyBoardMap);
	public List<AlreadyReadBoardResponseDto> getAlreadyReadBoard(int userId);
	public Map<String, Integer> registerBoardCount(int userId);
	public Map<String, Integer>readBoardCount(int userId);
}

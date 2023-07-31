package com.mini.board.miniprojectBoard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.mini.board.miniprojectBoard.entity.Board;
import com.mini.board.miniprojectBoard.entity.User;

@Mapper
public interface MainBoardRepository {

	public User getUserInfo(Map<String, Object> userInfoMap); 
	public List<Board> getBoards(int index);
	public int getTotalCount(int index);
	
	public int readBoard(Map<String, Object> map);
	public List<Map<String, Object>> alreadyReadBoard(Map<String, Object> map);
	public int increaseViews(Map<String, Object> boardData);
}

package com.mini.board.miniprojectBoard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.mini.board.miniprojectBoard.entity.Board;
import com.mini.board.miniprojectBoard.entity.Cast;
import com.mini.board.miniprojectBoard.entity.Movie;
import com.mini.board.miniprojectBoard.entity.User;

@Mapper
public interface MainBoardRepository {

	public User getUserInfo(Map<String, Object> userInfoMap); 
	public List<Board> getBoards(Map<String, Object> searchBoardMap);
	public int getTotalCount(Map<String, Object> map);
	
	public int readBoard(Map<String, Object> map);
	public List<Map<String, Object>> alreadyReadBoard(Map<String, Object> map);
	public int increaseViews(Map<String, Object> boardData);
	public int commentCount();
	
	public List<Movie> test();
	public List<Cast> cast();
}

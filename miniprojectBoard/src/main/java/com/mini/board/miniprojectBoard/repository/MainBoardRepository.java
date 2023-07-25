package com.mini.board.miniprojectBoard.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.mini.board.miniprojectBoard.entity.Board;

@Mapper
public interface MainBoardRepository {

	public List<Board> getBoards();
}
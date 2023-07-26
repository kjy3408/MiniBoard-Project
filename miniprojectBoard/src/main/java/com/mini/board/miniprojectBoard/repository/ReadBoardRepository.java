package com.mini.board.miniprojectBoard.repository;

import org.apache.ibatis.annotations.Mapper;

import com.mini.board.miniprojectBoard.entity.Board;

@Mapper
public interface ReadBoardRepository {

	public Board readboard(int boardId);
}

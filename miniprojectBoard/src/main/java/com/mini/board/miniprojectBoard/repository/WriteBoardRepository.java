package com.mini.board.miniprojectBoard.repository;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface WriteBoardRepository {

	public int writeBoard(Map<String,Object> map);
}

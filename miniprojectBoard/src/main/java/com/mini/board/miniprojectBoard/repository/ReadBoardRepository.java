package com.mini.board.miniprojectBoard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.mini.board.miniprojectBoard.entity.Board;
import com.mini.board.miniprojectBoard.entity.Comment;

@Mapper
public interface ReadBoardRepository {

	public Board readBoard(int boardId);
	public int registerComment(Map<String, Object> commenMap);
	public List<Comment> getComment(int boardId);
	public int deleteComment(int commentId);
}

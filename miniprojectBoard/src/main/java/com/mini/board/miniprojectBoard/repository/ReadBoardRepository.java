package com.mini.board.miniprojectBoard.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.mini.board.miniprojectBoard.dto.board.response.ReplyCommentResponseDto;
import com.mini.board.miniprojectBoard.entity.Board;
import com.mini.board.miniprojectBoard.entity.Comment;

@Mapper
public interface ReadBoardRepository {

	public Board readBoard(int boardId);
	public int registerComment(Map<String, Object> commenMap);
	public List<Comment> getComment(int boardId);
	public int deleteComment(int commentId);
	public int modifyComment(Map<String, Object> modifyMap);
	public int registerReplyComment(Map<String, Object> replyCommentMap);
	public List<ReplyCommentResponseDto> getReplyComment(int getCommentId);
	public int deleteReplyComment(int replyCommentId);
	public int commentCountUp(int boardId);
	public int addLike(Map<String, Object> map);
	public int disLike(Map<String, Object> map);
	public Map<String, Object> addLikeFlag(Map<String, Object> map);
	public int addLikeCountChange(Map<String, Object> map);
}

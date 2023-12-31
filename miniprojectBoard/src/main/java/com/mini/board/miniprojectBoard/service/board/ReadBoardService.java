package com.mini.board.miniprojectBoard.service.board;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.mini.board.miniprojectBoard.dto.board.request.CommentRequestDto;
import com.mini.board.miniprojectBoard.dto.board.request.ModifyCommentRequestDto;
import com.mini.board.miniprojectBoard.dto.board.request.ReplyCommentRequestDto;
import com.mini.board.miniprojectBoard.dto.board.response.CommentResponseDto;
import com.mini.board.miniprojectBoard.dto.board.response.ReadBoardResponseDto;
import com.mini.board.miniprojectBoard.dto.board.response.ReplyCommentResponseDto;
import com.mini.board.miniprojectBoard.repository.ReadBoardRepository;
import com.mini.board.miniprojectBoard.security.PrincipalUser;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReadBoardService {

	private final ReadBoardRepository readBoardRepository;
	
	public ReadBoardResponseDto readBoard(int boardId) {
		return readBoardRepository.readBoard(boardId).toReadBoardDto();
	}
	
	public int registerComment(CommentRequestDto commentRequestDto) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();	    
		
	    Map<String,Object> commentMap = new HashMap<>();
	    commentMap.put("comment", commentRequestDto.getComment());
	    commentMap.put("boardId", commentRequestDto.getBoardId());
	    commentMap.put("userId", principalUser.getUserId());
	    
		readBoardRepository.registerComment(commentMap);
		readBoardRepository.commentCountUp(commentRequestDto.getBoardId());
		return 0;
	}
	
	public List<CommentResponseDto> getComments(int boardId){
		List<CommentResponseDto> list = new ArrayList<>();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();	    
		
		readBoardRepository.getComment(boardId).forEach(data -> {
			list.add(data.toDto());
		});
		
		for(int i = 0; i < list.size(); i++) {
			if(list.get(i).getUserId() == principalUser.getUserId()) {
				list.get(i).setFlag(true);
			}
		}
		return list;
	}
		
	public int deleteComment(int commentId, int boardId) {
		readBoardRepository.deleteComment(commentId);
		readBoardRepository.commentCountUp(boardId);
		return 1;
	}
	
	public int modifyComment(ModifyCommentRequestDto modifyCommentRequestDto) {
		Map<String, Object> modifyMap = new HashMap<>();
		modifyMap.put("boardId", modifyCommentRequestDto.getBoardId());
		modifyMap.put("commentId", modifyCommentRequestDto.getCommentId());
		modifyMap.put("modifyComment", modifyCommentRequestDto.getModifyComment());
		
		readBoardRepository.modifyComment(modifyMap);
		return 1;
	}
	
	public int registerReplyComment(ReplyCommentRequestDto replyCommentRequestDto) {
		Map<String, Object> replyCommentMap = new HashMap<>();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();	    
		
	    replyCommentMap.put("replyComment", replyCommentRequestDto.getReplyComment());
		replyCommentMap.put("commentId", replyCommentRequestDto.getCommentId());
		replyCommentMap.put("userId", principalUser.getUserId());
		replyCommentMap.put("boardId", replyCommentRequestDto.getBoardId());
		
		readBoardRepository.registerReplyComment(replyCommentMap);
		return 0;
	}
	
	public List<ReplyCommentResponseDto> getReplyComment(int getCommentId){
		List<ReplyCommentResponseDto> list = new ArrayList<>();
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
	    
	    list.addAll(readBoardRepository.getReplyComment(getCommentId));
	    
	    if(list != null) {
			for(int i = 0; i < list.size(); i++) {
				if(list.get(i).getUserId() 
						== principalUser.getUserId()) {
					list.get(i).setFlag(true);
				}
			}
	    }
	    
	    return list;
	}
	
	public int deleteReplyComment(int replyCommentId) {
		readBoardRepository.deleteReplyComment(replyCommentId);
		return 1;
	}
	
	public boolean addLike(int boardId) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
	    
		Map<String, Object> map = new HashMap<>();
		map.put("boardId", boardId);
		map.put("userId", principalUser.getUserId());
		readBoardRepository.addLike(map);
		readBoardRepository.addLikeCountChange(map);
		return true;
	}
	
	public boolean disLike(int boardId) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
	    
		Map<String, Object> map = new HashMap<>();
		map.put("boardId", boardId);
		map.put("userId", principalUser.getUserId());
		readBoardRepository.disLike(map);
		readBoardRepository.addLikeCountChange(map);
		return false;
	}
	
	public boolean addLikeFlag(int boardId) {
		Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
	    PrincipalUser principalUser = (PrincipalUser) authentication.getPrincipal();
	    
		Map<String, Object> map = new HashMap<>();
		map.put("boardId", boardId);
		map.put("userId", principalUser.getUserId());
		
		if(readBoardRepository.addLikeFlag(map) != null) {
			return true;
		}else {
			return false;			
		}
	}
}
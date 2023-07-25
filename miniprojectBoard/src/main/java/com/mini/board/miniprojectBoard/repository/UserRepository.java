package com.mini.board.miniprojectBoard.repository;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.mini.board.miniprojectBoard.entity.Authority;
import com.mini.board.miniprojectBoard.entity.User;

@Mapper
public interface UserRepository {
	public User findUserByUsername(String username);
	public User findUserByNickname(String nickname);
	public User findUserByNameAndPhone(Map<String, Object> map);
	public int saveUser(User user);
	public int saveAuthority(Authority authority);
	public int updateProvider(User user);
	public int updatePassword(User user);
	public int userDelete(User user);
	public int updateProfileImg(User user);
}

package com.mini.board.miniprojectBoard.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import com.mini.board.miniprojectBoard.dto.auth.FindPasswordRequestDto;
import com.mini.board.miniprojectBoard.dto.auth.FindUpdatePasswordRequestDto;
import com.mini.board.miniprojectBoard.dto.auth.FindUserIdResponseDto;
import com.mini.board.miniprojectBoard.dto.auth.FindUsernameRequestDto;
import com.mini.board.miniprojectBoard.dto.auth.LoginReqDto;
import com.mini.board.miniprojectBoard.dto.auth.PasswordChangeDto;
import com.mini.board.miniprojectBoard.dto.auth.RegisterQuestionCategoryResponseDto;
import com.mini.board.miniprojectBoard.dto.auth.SignupDto;
import com.mini.board.miniprojectBoard.entity.Authority;
import com.mini.board.miniprojectBoard.entity.User;
import com.mini.board.miniprojectBoard.exception.CustomException;
import com.mini.board.miniprojectBoard.exception.ErrorMap;
import com.mini.board.miniprojectBoard.repository.UserRepository;
import com.mini.board.miniprojectBoard.security.PrincipalUser;
import com.mini.board.miniprojectBoard.security.jwt.JwtTokenProvider;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetailsService {
	private final UserRepository userRepository;
	private final AuthenticationManagerBuilder authenticationManagerBuilder;
	private final JwtTokenProvider jwtTokenProvider;
	
	public List<RegisterQuestionCategoryResponseDto> getQuestionCategory() {
		
		List<RegisterQuestionCategoryResponseDto> categoryList = new ArrayList<>();
		userRepository.getQuestionCategory().forEach(category -> {
			categoryList.add(category);
		});
		
		return categoryList;
	}
	
	public void checkDuplicatedUsername(String username) {
		if(userRepository.findUserByUsername(username) != null) {
			throw new CustomException("Duplicated Email", 
					ErrorMap.builder().put("username", "사용중인 이메일입니다.").build());
		}
	}
	
	public void checkDuplicatedNickname(String nickname) {
		if(userRepository.findUserByNickname(nickname) != null) {
			throw new CustomException("Duplicated nickname", 
					ErrorMap.builder().put("nickname", "이미 사용중인 닉네임입니다.").build());
		}
	}
	
	public void signup(SignupDto signupDto) {
		
		if(misMatchPassword(signupDto)) {
			throw new CustomException("error", 
					ErrorMap.builder().put("password", "비밀번호가 일치하지 않습니다.").build());
		}
		
		User userEntity = signupDto.toEntity();
		
		userRepository.saveUser(userEntity);
		System.out.println();
		userRepository.saveAuthority(Authority.builder()
				.userId(userEntity.getUserId())
				.roleId(2)
				.build());
	}
	
	public boolean misMatchPassword(SignupDto signupDto) {
		return !signupDto.getPassword().equals(signupDto.getCheckPassword());
	}
	
	public String signin(LoginReqDto loginReqDto) {
		UsernamePasswordAuthenticationToken authenticationToken =
				new UsernamePasswordAuthenticationToken(loginReqDto.getUsername(), loginReqDto.getPassword());

		Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
		System.out.println(authentication);
		System.out.println(jwtTokenProvider.generateToken(authentication));
		return jwtTokenProvider.generateToken(authentication);
	}
	
	public PrincipalUser getUserInfo(String accessToken) {
		String username = jwtTokenProvider.getClaims(jwtTokenProvider.getToken(accessToken)).get("username").toString();
		User userEntity = userRepository.findUserByUsername(username);
		
		return userEntity.toPrincipal();
				
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User userEntity = userRepository.findUserByUsername(username);
		
		return userEntity.toPrincipal();
	}
	
	public boolean authenticate(String accessToken) {
		
		return jwtTokenProvider.validateToken(jwtTokenProvider.getToken(accessToken));
	}

	public int userDelete(User user) {
		userRepository.userDelete(user);
		return userRepository.userDelete(user);
	}
	
	public void updatePassword(PasswordChangeDto passwordChangeDto) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		PrincipalUser principalUser = (PrincipalUser) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
	    if (!StringUtils.hasText(passwordChangeDto.getOldPassword())) {
	        throw new CustomException("MisMatchPassword", 
	            ErrorMap.builder().put("oldPassword", "비밀번호를 입력해주세요.").build());
	    }
	    
		if(!encoder.matches(passwordChangeDto.getOldPassword(),principalUser.getPassword())) {
			throw new CustomException("MisMatchPassword", 
					ErrorMap.builder().put("oldPassword", "사용자 정보를 확인하세요").build());
			
		}
		
		if(!passwordChangeDto.getNewPassword().equals(passwordChangeDto.getCheckPassword())) {
			throw new CustomException("MisMatchPassword", 
					ErrorMap.builder().put("checkPassword", "새 비밀번호와 비밀번호 확인이 일치하지 않습니다.").build());
		}
		
		userRepository.updatePassword(User.builder()
											.userId(principalUser.getUserId())
											.password(new BCryptPasswordEncoder().encode(passwordChangeDto.getCheckPassword()))
											.build());
	}
	
	public String findUsername(FindUsernameRequestDto findUsernameRequestDto){
		Map<String, Object> findUsernameMap = new HashMap<>();
		findUsernameMap.put("nickname", findUsernameRequestDto.getNickname());
		findUsernameMap.put("questionId", findUsernameRequestDto.getQuestionId());
		findUsernameMap.put("findUsernameAnswer", findUsernameRequestDto.getFindUsernameAnswer());

		if(userRepository.findUsername(findUsernameMap) == null) {
			throw new CustomException("notFoundUsername",
					ErrorMap.builder().put("notFoundUsername", "사용자를 찾을 수 없습니다.").build());
		}
		return userRepository.findUsername(findUsernameMap);
	}
	
	public Map<String, Object> findPassword(FindPasswordRequestDto findPasswordRequestDto ) {
		Map<String, Object> findPasswordMap = new HashMap<>();
		findPasswordMap.put("username", findPasswordRequestDto.getUsername());
		findPasswordMap.put("questionId", findPasswordRequestDto.getQuestionId());
		findPasswordMap.put("findPasswordAnswer", findPasswordRequestDto.getFindPasswordAnswer());
		
		Map<String, Object> responseMap = new HashMap<>();
		if(userRepository.findPassword(findPasswordMap).size() < 1) {
			throw new CustomException("notFoundPassword",
					ErrorMap.builder().put("notFoundPassword", "사용자를 찾을 수 없습니다.").build());
		
		}else {
			userRepository.findPassword(findPasswordMap).forEach(list-> {
				responseMap.put("userId", list.getUserId());
			});
			return responseMap;
		}
	}
	
	public void findUpdatePassword(FindUpdatePasswordRequestDto findUpdatePasswordRequestDto) {
		System.out.println(findUpdatePasswordRequestDto);
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		if(!findUpdatePasswordRequestDto.getNewPassword().equals(findUpdatePasswordRequestDto.getCheckPassword())) {
			throw new CustomException("MisMatchPassword", 
					ErrorMap.builder().put("checkPassword", "새 비밀번호와 비밀번호 확인이 일치하지 않습니다.").build());
		}
		
		String password = (new BCryptPasswordEncoder().encode(findUpdatePasswordRequestDto.getCheckPassword()));
		
		User userEntity = User.builder()
							.userId(findUpdatePasswordRequestDto.getUserId())
							.password(password)
							.build();
		userRepository.findUpdatePassword(userEntity);
	}
}

package com.mini.board.miniprojectBoard.controller;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mini.board.miniprojectBoard.aop.annotation.ValidAspect;
import com.mini.board.miniprojectBoard.dto.auth.FindPasswordRequestDto;
import com.mini.board.miniprojectBoard.dto.auth.FindUpdatePasswordRequestDto;
import com.mini.board.miniprojectBoard.dto.auth.FindUsernameRequestDto;
import com.mini.board.miniprojectBoard.dto.auth.LoginReqDto;
import com.mini.board.miniprojectBoard.dto.auth.PasswordChangeDto;
import com.mini.board.miniprojectBoard.dto.auth.SignupDto;
import com.mini.board.miniprojectBoard.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController{
	private final AuthenticationService authenticationService;
	
	@GetMapping("/register/category")
	public ResponseEntity<?> getQuestionCategory() {
		
		return ResponseEntity.ok().body(authenticationService.getQuestionCategory());
	}
	
	@ValidAspect
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@Valid @RequestBody SignupDto signupDto, BindingResult bindingResult) {
		System.out.println(signupDto);
		authenticationService.checkDuplicatedUsername(signupDto.getUsername());
		authenticationService.checkDuplicatedNickname(signupDto.getNickname());
		authenticationService.signup(signupDto);
		return ResponseEntity.ok().body(true);
	}
	
	@ValidAspect
	@PostMapping("/login")
	public ResponseEntity<?> login(@Valid @RequestBody LoginReqDto loginReqDto, BindingResult bindingResult) {
		return ResponseEntity.ok(authenticationService.signin(loginReqDto));
	}
	
	@GetMapping("/authenticate")
	public ResponseEntity<?> authenticate(@RequestHeader(value="Authorization") String accessToken) {
		
		return ResponseEntity.ok().body(authenticationService.authenticate(accessToken));
	}
	
	@GetMapping("/userInfo")
	public ResponseEntity<?> getUserInfo(@RequestHeader(value="Authorization") String accessToken) {
		return ResponseEntity.ok().body(authenticationService.getUserInfo(accessToken));
	}
	
	@ValidAspect
	@PutMapping("/updatepassword")
	public ResponseEntity<?> passwordChange(@Valid @RequestBody PasswordChangeDto passwordChangeDto, BindingResult bindingResult){
		authenticationService.updatePassword(passwordChangeDto);		
		return ResponseEntity.ok().body(null);
	}
	
	@ValidAspect
	@GetMapping("/find/username")
	public ResponseEntity<?> findUsername(@Valid FindUsernameRequestDto findUsernameRequestDto, BindingResult bindingResult) {
		
		return ResponseEntity.ok().body(authenticationService.findUsername(findUsernameRequestDto));
	}
	
	@ValidAspect
	@GetMapping("/find/password")
	public ResponseEntity<?> findPassword(@Valid FindPasswordRequestDto findPasswordRequestDto, BindingResult bindingResult) {
		
		return ResponseEntity.ok().body(authenticationService.findPassword(findPasswordRequestDto));
	}
	
	@ValidAspect
	@PutMapping("/find/updatepassword")
	public ResponseEntity<?> passwordChange(@Valid @RequestBody FindUpdatePasswordRequestDto findUpdatePasswordRequestDto, BindingResult bindingResult){
//		System.out.println(findUpdatePasswordRequestDto);
		authenticationService.findUpdatePassword(findUpdatePasswordRequestDto);		
		return ResponseEntity.ok().body(null);
	}
}

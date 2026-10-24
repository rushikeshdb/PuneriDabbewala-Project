package org.tech.forgotpassword.controller;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.tech.password.service.PasswordService;
import org.tech.password.dto.VerifyOtpDto;
import org.tech.password.dto.ResetPasswordDto;


@RestController
public class ForgotPasswordController {
	
	@Autowired
	PasswordService passwordService;
	
	@PostMapping("/forgot-password")
	public ResponseEntity<?> sendOtp(@RequestBody Map<String,String> request){
	    String email = request.get("email");
	    
	    System.out.println("Getting Call To Send Otp in backend with mail :"+email);
	    
	    passwordService.generateAndSendOtp(email);

	    return ResponseEntity.ok(
	        "OTP sent successfully"
	    );
	}
	
	@PostMapping("/verify-otp")
	public ResponseEntity<?> verifyOtp(@RequestBody VerifyOtpDto dto){

	    passwordService.verifyOtp(dto);

	    return ResponseEntity.ok(
	        "OTP verified"
	    );
	}
	
	@PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(
            @RequestBody ResetPasswordDto dto) {

        passwordService.resetPassword(dto);

        return ResponseEntity.ok("Password Changed Successfully");
    }
}
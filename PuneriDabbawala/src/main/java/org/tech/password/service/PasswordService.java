package org.tech.password.service;

import org.tech.password.dto.ResetPasswordDto;
import org.tech.password.dto.VerifyOtpDto;

public interface PasswordService {

	void generateAndSendOtp(String email);

	void verifyOtp(VerifyOtpDto dto);

	void resetPassword(ResetPasswordDto dto);

}
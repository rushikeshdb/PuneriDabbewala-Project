package org.tech.otp.repository;

import org.tech.forgotpassword.entity.PasswordResetOtp;

public interface PasswordResetOtpRepository {

	void save(PasswordResetOtp resetOtp);

	PasswordResetOtp findTopByEmailOrderByIdDesc(String email);

	void delete(PasswordResetOtp otp);

}

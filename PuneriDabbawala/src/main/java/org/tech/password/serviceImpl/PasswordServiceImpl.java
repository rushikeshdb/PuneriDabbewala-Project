package org.tech.password.serviceImpl;

import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.tech.email.service.EmailService;
import org.tech.entity.Customer;
import org.tech.forgotpassword.entity.PasswordResetOtp;
import org.tech.password.dto.VerifyOtpDto;
import org.tech.otp.repository.PasswordResetOtpRepository;
import org.tech.password.dto.ResetPasswordDto;
import org.tech.password.service.PasswordService;
import org.tech.repository.CustomerRepository;

@Service
public class PasswordServiceImpl implements PasswordService {

    @Autowired
    private PasswordResetOtpRepository otpRepo;

    @Autowired
    private CustomerRepository customerRepo;

    @Autowired
    private EmailService emailService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void generateAndSendOtp(String email) {

        Customer customer = customerRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Email not found"));
       
        System.out.println("Getting Call To generateAndSendOtp in backend with mail :"+email);
        
        String otp = generateOtp();

        PasswordResetOtp resetOtp = new PasswordResetOtp();

        resetOtp.setEmail(customer.getEmail());
        resetOtp.setOtp(otp);
        resetOtp.setVerified(false);
        resetOtp.setExpiryTime(LocalDateTime.now().plusMinutes(5));

        otpRepo.save(resetOtp);

        emailService.sendOtp(email, otp);
    }

    private String generateOtp() {

        Random random = new Random();

        int otp = 100000 + random.nextInt(900000);

        return String.valueOf(otp);
    }

    @Override
    @Transactional
    public void verifyOtp(VerifyOtpDto dto) {

        PasswordResetOtp savedOtp =
                otpRepo.findTopByEmailOrderByIdDesc(dto.getEmail());

        if (savedOtp == null) {
            throw new RuntimeException("OTP not found");
        }

        if (savedOtp.getExpiryTime().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("OTP Expired");
        }

        if (!savedOtp.getOtp().equals(dto.getOtp())) {
            throw new RuntimeException("Invalid OTP");
        }

        savedOtp.setVerified(true);

       // otpRepo.save(savedOtp);
    }

    @Override
    public void resetPassword(ResetPasswordDto dto) {

        PasswordResetOtp otp =
                otpRepo.findTopByEmailOrderByIdDesc(dto.getEmail());

        if (otp == null || !otp.isVerified()) {
            throw new RuntimeException("OTP verification required");
        }

        Customer customer = customerRepo.findByEmail(dto.getEmail())
                .orElseThrow(() -> new RuntimeException("Customer not found"));

        customer.setPassword(passwordEncoder.encode(dto.getNewPassword()));

        customerRepo.save(customer);

        otpRepo.delete(otp);
    }

//	@Override
//	public void verifyOtp(org.tech.password.dto.VerifyOtpDto dto) {
//		// TODO Auto-generated method stub
//		
//	}
}
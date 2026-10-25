package org.tech.email.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.tech.email.service.EmailService;

@Service
public class EmailServiceImpl implements EmailService{

    @Autowired
    private JavaMailSender mailSender;


    public void sendOtp(String email, String otp){


        SimpleMailMessage message =
                new SimpleMailMessage();


        message.setTo(email);

        message.setSubject("Password Reset OTP");


        message.setText(
            "Your OTP is : " + otp +
            "\nOTP expires in 5 minutes"
        );


        mailSender.send(message);

    }
}

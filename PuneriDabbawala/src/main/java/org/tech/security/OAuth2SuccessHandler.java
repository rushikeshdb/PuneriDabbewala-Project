package org.tech.security;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import org.tech.repository.CustomerRepository;
import org.tech.service.JWTService;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    @Autowired
    private JWTService jwtService;

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication)
            throws IOException, ServletException {

        OAuth2User oauthUser =
                (OAuth2User) authentication.getPrincipal();

        String email =
                oauthUser.getAttribute("email");

        System.out.println("Google Login Successful");
        System.out.println("Google Email: " + email);

        String token =
                jwtService.generateToken(email);

        String role =
                customerRepository.getRoleByEmail(email);

        System.out.println("Role in backend is :" + role);
        System.out.println("Generated JWT: " + token);

        String  sendRedirect=
                "http://localhost:5173/oauth-success?token="
                + token
                + "&role="
                + role;

System.out.println("REDIRECT URL = " + sendRedirect);

response.sendRedirect(sendRedirect);
        
    }
}
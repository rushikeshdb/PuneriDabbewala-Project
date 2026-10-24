package org.tech.service;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;

public interface JWTService {

	String generateToken(String username);

	String extractuserName(String token);

	boolean validateToken(String token, UserDetails userDetails);

}

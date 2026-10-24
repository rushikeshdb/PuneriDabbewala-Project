package org.tech.exception.controller;

@SuppressWarnings("serial")
public class InvalidCredentialsException extends RuntimeException{
	public InvalidCredentialsException(String message) {
        super(message);
    }
}
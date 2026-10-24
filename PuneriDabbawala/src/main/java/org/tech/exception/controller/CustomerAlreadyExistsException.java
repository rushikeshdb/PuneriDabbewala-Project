package org.tech.exception.controller;

@SuppressWarnings("serial")
public class CustomerAlreadyExistsException extends RuntimeException{
	 public CustomerAlreadyExistsException(String message) {
	        super(message);
	 }
}

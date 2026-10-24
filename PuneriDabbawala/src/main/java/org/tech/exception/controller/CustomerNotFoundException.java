package org.tech.exception.controller;

@SuppressWarnings("serial")
public class CustomerNotFoundException extends RuntimeException {
    public CustomerNotFoundException(String message) {
        super(message);
    }
}

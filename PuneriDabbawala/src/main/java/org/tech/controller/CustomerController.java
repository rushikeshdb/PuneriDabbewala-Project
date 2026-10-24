package org.tech.controller;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.tech.dto.CustomerDetailsDto;
import org.tech.dto.LoginResponse;
import org.tech.dto.UpdateCustomerDto;
import org.tech.entity.Customer;
import org.tech.exception.controller.InvalidCredentialsException;
import org.tech.service.CustomerService;
import org.tech.service.JWTService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@CrossOrigin(origins = "http://localhost:5173")

@RestController
public class CustomerController {
	
	@Autowired
	CustomerService customerService;
	
	@Autowired
	JWTService jwtService;
	
	@GetMapping("/")
	public String home(HttpServletRequest request) {
	    return "Login Successful Session Id is: " + request.getSession().getId();
	}
	  
	@GetMapping("/csrf-token")
	public CsrfToken getCsrfToken(HttpServletRequest request) {
		return (CsrfToken) request.getAttribute("_csrf");
	}
	
	@PostMapping("/login")
	public ResponseEntity<LoginResponse> loginCustomer(@RequestBody Customer customer){
		System.out.println("hello form login "+customer.getEmail()+"  "+customer.getPassword());
//		boolean res = customerService.authenticateUser(customer.getEmail(), customer.getPassword());
//		
//		if(res) {
//			return jwtService.generateToken(customer.getEmail());
//		}
//		else {
//			return null;
//		}
		boolean result = customerService.authenticateUser(
		        customer.getEmail(),
		        customer.getPassword()
		    );

		    if(!result){
		        throw new InvalidCredentialsException("Invalid email or password");
		    }
//		return ResponseEntity.ok(jwtService.generateToken(customer.getEmail()));
		    String token = jwtService.generateToken(
		            customer.getEmail()
		        );

		        String role = customerService.getRoleByEmail(
		            customer.getEmail()
		        );

		        LoginResponse response = new LoginResponse(token, role);

		        return ResponseEntity.ok(response);
	}
	
	@PostMapping("/regCustomer")
	public ResponseEntity<String> registerNewCustomer(
			@Valid @RequestBody Customer customer){
		
		//boolean isRegister = customerService.registerCustomer(customer);
//		if(isRegister) {
//			return new ResponseEntity<>("Customer Register Successfully", HttpStatus.CREATED);
//		}
		customerService.registerCustomer(customer);
		return ResponseEntity
	            .status(HttpStatus.CREATED)
	            .body("Customer Registered Successfully");
	}
	
	@GetMapping("/admin/getAllCustomers")
	public ResponseEntity<List<CustomerDetailsDto>> getAllCustomerDetails(){
		List<CustomerDetailsDto> customerList = customerService.getAllCustomers();
//		if(customerList.isEmpty()) {
//			return ResponseEntity.noContent().build(); 
//		}
		return ResponseEntity.ok(customerList);
	}
	
	@GetMapping("/admin/getCustomer/{cid}")
	public ResponseEntity<UpdateCustomerDto> getCustomerById(@PathVariable Long cid){
			
//		Optional<UpdateCustomerDto> customer = customerService.getCustomer(cid);
//		
//		if(customer.isPresent()) {
//			return ResponseEntity.status(HttpStatus.OK).body(customer.get());
//		}
		 UpdateCustomerDto customer = customerService.getCustomer(cid);

		 return ResponseEntity.ok(customer);
	}
	
	@PatchMapping("/admin/updateCustomer/{cid}")
	public ResponseEntity<String> updateCustomerById(@PathVariable Long cid, @RequestBody UpdateCustomerDto customer){
//		boolean isUpdated = customerService.updateCustomerById(cid, customer); 
//		if(isUpdated) {
//			return ResponseEntity.status(HttpStatus.OK).body("Customer Updated Successfully");
//		}
//		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer Not Found");
		
		customerService.updateCustomerById(cid, customer);

	    return ResponseEntity.ok("Customer Updated Successfully");
	}
	
	@DeleteMapping("/admin/deleteCustomer/{cid}")
	public ResponseEntity<String> deleteCustomerById(@PathVariable Long cid){
//		System.out.println("Customer Id for deletion is :"+cid);
//		boolean isDeleted = customerService.deleteCustomer(cid);
//		if(isDeleted) {
//			return ResponseEntity.status(HttpStatus.OK).body("Customer Deleted Successfully");
//		}
//		return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Customer Not Found");
		
		customerService.deleteCustomer(cid);

	    return ResponseEntity.ok("Customer Deleted Successfully");
	}
}
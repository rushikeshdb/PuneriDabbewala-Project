package org.tech.serviceImpl;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.tech.dto.CustomerDetailsDto;
import org.tech.dto.UpdateCustomerDto;
import org.tech.entity.Customer;
import org.tech.exception.controller.CustomerAlreadyExistsException;
import org.tech.exception.controller.CustomerNotFoundException;
import org.tech.repository.CustomerRepository;
import org.tech.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	CustomerRepository customerRepo;
	
	@Autowired
	AuthenticationManager authManager;
	
	private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

//	@Override
//	public boolean registerCustomer(Customer customer) {
//		// TODO Auto-generated method stub
//		customer.setPassword(encoder.encode(customer.getPassword()));
//		return customerRepo.registerCustomer(customer);
//	}
	@Override
	public String getRoleByEmail(String email) {
		// TODO Auto-generated method stub
		return customerRepo.getRoleByEmail(email);
	}

	
	@Override
	public void registerCustomer(Customer customer) {

	    if(customerRepo.existsByEmail(customer.getEmail())) {
	        throw new CustomerAlreadyExistsException(
	            "Customer already exists with email: " + customer.getEmail()
	        );
	    }

	    customer.setPassword(
	        encoder.encode(customer.getPassword())
	    );

	    customerRepo.registerCustomer(customer);
	}

//	@Override
//	public List<CustomerDetailsDto> getAllCustomers() {
//		// TODO Auto-generated method stub
//		return customerRepo.getAllCustomers();
//	}
	public List<CustomerDetailsDto> getAllCustomers(){

	    List<CustomerDetailsDto> customers = customerRepo.getAllCustomers();

	    if(customers.isEmpty()){
	        throw new CustomerNotFoundException("No customers available");
	    }

	    return customers;
	}
	
	@Override
	public UpdateCustomerDto getCustomer(Long cid){

	    return customerRepo.getCustomer(cid)
	        .orElseThrow(() ->
	            new CustomerNotFoundException(
	                "Customer not found with id : " + cid
	            )
	        );
	}
	
//	@Override
//	public boolean updateCustomerById(Long cid, UpdateCustomerDto customer) {
//		// TODO Auto-generated method stub
//		return customerRepo.updateCustomerById(cid, customer);
//	}
	@Override
	public void updateCustomerById(Long cid, UpdateCustomerDto customer) {

	    boolean updated = customerRepo.updateCustomerById(cid, customer);

	    if (!updated) {
	        throw new CustomerNotFoundException(
	                "Customer not found with id : " + cid);
	    }
	}

//	@Override
//	public boolean deleteCustomer(Long cid) {
//		// TODO Auto-generated method stub
//		return customerRepo.deleteCustomer(cid);
//	}
	@Override
	public void deleteCustomer(Long cid) {

	    boolean deleted = customerRepo.deleteCustomer(cid);

	    if (!deleted) {
	        throw new CustomerNotFoundException(
	                "Customer not found with id : " + cid);
	    }
	}

	@Override
	public boolean authenticateUser(String email, String password) {
		// TODO Auto-generated method stub
		System.out.println(email+" "+password);
		Authentication authentication = 
				authManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
		
		if(authentication.isAuthenticated()) {
			return true;
		}
		else {
			return false;
		}
		//return customerRepo.authenticateUser(email, password);
	}
	
	

} 	
package org.tech.service;

import java.util.List;
import java.util.Optional;

import org.tech.dto.CustomerDetailsDto;
import org.tech.dto.UpdateCustomerDto;
import org.tech.entity.Customer;

public interface CustomerService {

	void registerCustomer(Customer customer);

	List<CustomerDetailsDto> getAllCustomers();
	
	UpdateCustomerDto getCustomer(Long cid);
	
	void updateCustomerById(Long cid, UpdateCustomerDto customer);

	void deleteCustomer(Long cid);

	boolean authenticateUser(String email, String password);

	String getRoleByEmail(String email);

}
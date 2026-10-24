package org.tech.repository;

import java.util.List;
import java.util.Optional;

import org.tech.dto.CustomerDetailsDto;
import org.tech.dto.UpdateCustomerDto;
import org.tech.entity.Customer;

public interface CustomerRepository {

	boolean registerCustomer(Customer customer);

	List<CustomerDetailsDto> getAllCustomers();
	
	Optional<UpdateCustomerDto> getCustomer(Long cid);
	
	boolean updateCustomerById(Long cid, UpdateCustomerDto customer);

	boolean deleteCustomer(Long cid);

	boolean existsByEmail(String email);

	Optional<Customer> findByEmail(String email);

	void save(Customer customer);

	String getRoleByEmail(String email);

	//boolean authenticateUser(String email, String password);

}
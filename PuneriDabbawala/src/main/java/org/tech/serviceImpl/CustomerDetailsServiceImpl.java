package org.tech.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.tech.entity.Customer;
import org.tech.entity.CustomerPrincipal;
import org.tech.repositoryImpl.CustomerRepo;


@Service
public class CustomerDetailsServiceImpl implements UserDetailsService{
	
	@Autowired
	private CustomerRepo customerRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

	    Customer customer = customerRepo.findByEmail(username);
	    
	    System.out.println("from Customer Principal "+customer.getRole());
	    
	    if (customer == null) {
	        throw new UsernameNotFoundException("Customer Not Found");
	    }

	    return new CustomerPrincipal(customer);
	}
}

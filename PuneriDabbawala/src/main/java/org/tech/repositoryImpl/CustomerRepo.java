package org.tech.repositoryImpl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.tech.entity.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Integer>{

	Customer findByEmail(String email); 

	
}

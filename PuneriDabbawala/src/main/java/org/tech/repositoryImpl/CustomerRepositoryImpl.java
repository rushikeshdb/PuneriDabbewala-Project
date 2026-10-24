package org.tech.repositoryImpl;

import java.util.*;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.hibernate.transform.AliasToBeanResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.tech.dto.CustomerDetailsDto;
import org.tech.dto.UpdateCustomerDto;
import org.tech.entity.Customer;
import org.tech.repository.CustomerRepository;


@Repository
public class CustomerRepositoryImpl implements CustomerRepository{
	
	@Autowired
	SessionFactory sessionFactory;
	
	@Override
	public boolean registerCustomer(Customer customer) {
		// TODO Auto-generated method stub
		Session session = null;
		Transaction tx = null;
		try {
			session = sessionFactory.openSession();
			tx = session.beginTransaction();
			session.persist(customer);
			tx.commit();
			return true;
		}
		catch(Exception e) {
			if(tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		}
		finally {
			if(session != null) {
				session.close();
			}
		}
		return false;
	}

	@Override
	public List<CustomerDetailsDto> getAllCustomers() {
		// TODO Auto-generated method stub
		Session session = null;
		List<CustomerDetailsDto> customerList = new ArrayList<CustomerDetailsDto>();
		try {
			session = sessionFactory.openSession();
			String sql = "select pk_id, first_name, last_name, email, contact from customer";
			Query<CustomerDetailsDto> query = session.createNativeQuery(sql)
					.setResultListTransformer(new AliasToBeanResultTransformer(CustomerDetailsDto.class));
			customerList = query.list();
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		finally {
			if(session != null) {
				session.close();
			}
		}
		return customerList;
	}
	
	@Override
	public Optional<UpdateCustomerDto> getCustomer(Long cid) {
		// TODO Auto-generated method stub
		Session session = null;
		UpdateCustomerDto customer;
		try {
			session = sessionFactory.openSession();
			
			String hql =
					"SELECT new org.tech.dto.UpdateCustomerDto(c.pk_id, c.firstName, c.lastName, c.email, c.contact) " +
					"FROM Customer c WHERE c.pk_id = :cid";

			Query<UpdateCustomerDto> query = session.createQuery(hql, UpdateCustomerDto.class);
			
			query.setParameter("cid", cid);
			
			customer = query.getSingleResult();
			
			return Optional.ofNullable(customer);
		}
		catch(Exception e) {
			
			e.printStackTrace();
			
			return Optional.empty();
		}
		finally {
			if(session != null) {
				session.close();
			}
		}
	}

	@Override
	public boolean updateCustomerById(Long cid, UpdateCustomerDto customer) {
		// TODO Auto-generated method stub
		Session session = null;
		Transaction tx = null;
		
		String firstName = customer.getFirstName();
		String lastName = customer.getLastName();
		String contact = customer.getContact();
		String email = customer.getEmail();
		
		try {
			session = sessionFactory.openSession();
			tx = session.beginTransaction();
			
			String sql = "update customer set first_name = :firstName, last_name = :lastName, email = :email, contact = :contact where pk_id = :cid";
			
			Query query = session.createNativeQuery(sql).setResultTransformer(new AliasToBeanResultTransformer(Customer.class));
			
			query.setParameter("firstName", firstName);
			query.setParameter("lastName", lastName);
			query.setParameter("email", email);
			query.setParameter("contact", contact);
			query.setParameter("cid", cid);
			
			int row = query.executeUpdate();
			
			tx.commit();
			
			return row>0;
		}
		catch(Exception e) {
			if(tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		}
		finally {
			if(session != null) {
				session.close();
			}
		}
		return false;
	}

	@Override
	public boolean deleteCustomer(Long cid) {
		// TODO Auto-generated method stub
		Session session = null;
		Transaction tx = null;
		try {
			session = sessionFactory.openSession();
			tx = session.beginTransaction();
			Customer customer = session.get(Customer.class, cid);
			session.remove(customer);
			tx.commit();
			return true;
		}
		catch(Exception e) {
			if(tx != null) {
				tx.rollback();
			}
			e.printStackTrace();
		}
		finally {
			session.close();
		}
		return false;
	}

	@Override
	public boolean existsByEmail(String email) {

	    Session session = null;

	    try {
	        session = sessionFactory.openSession();

	        String sql = "select count(*) from customer where email = :email";
	       
	        Query<Long> query = session.createNativeQuery(sql);
	        query.setParameter("email", email);

	        Long count = query.uniqueResult();

	        return count != null && count > 0;

	    } catch (Exception e) {
	        e.printStackTrace();
	    } finally {
	        if (session != null) {
	            session.close();
	        }
	    }

	    return false;
	}

	@Override
	public Optional<Customer> findByEmail(String email) {

	    Session session = null;

	    try {
	        session = sessionFactory.openSession();

	        String hql = "FROM Customer c WHERE c.email = :email";

	        Query<Customer> query = session.createQuery(hql, Customer.class);
	        query.setParameter("email", email);

	        Customer customer = query.uniqueResult();

	        return Optional.ofNullable(customer);

	    } catch (Exception e) {
	        e.printStackTrace();
	        return Optional.empty();

	    } finally {
	        if (session != null) {
	            session.close();
	        }
	    }
	}
  

	@Override
	public void save(Customer customer) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public String getRoleByEmail(String email) {
		Session session = null;
		session = sessionFactory.openSession();

        String role = session.createQuery(
                "SELECT c.role FROM Customer c WHERE c.email = :email",
                String.class
        )
        .setParameter("email", email)
        .uniqueResult();

        return role;
    }

//	@Override
//	public boolean authenticateUser(String email, String password) {
//		// TODO Auto-generated method stub
//		Session session = null;
//		
//		try {
//			session = sessionFactory.openSession();
//			
//			String sql = "select *from customer where email = :email and password = :password";
//			
//			Query query = session.createQuery(sql, Customer.class);
//			
//			int row = query.executeUpdate();
//			
//			return row>0;
//		}
//		catch(Exception e){
//			e.printStackTrace();
//		}
//		finally {
//			session.close();
//		}
//		return false;
//	}
}
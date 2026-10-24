package org.tech.entity;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.jspecify.annotations.Nullable;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class CustomerPrincipal implements UserDetails{
	
	private Customer customer;
	
	public CustomerPrincipal(Customer customer) {
		this.customer = customer;
	}

//	@Override
//	public Collection<? extends GrantedAuthority> getAuthorities() {
//		// TODO Auto-generated method stub
//		return Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
//	}
	 @Override
	    public Collection<? extends GrantedAuthority> getAuthorities() {
		 System.out.println("ROLE FROM DATABASE = " + customer.getRole());
//		 return List.of(
//	        new SimpleGrantedAuthority("ROLE_" + customer.getRole())
//	     );
		 List<GrantedAuthority> authorities = List.of(
			        new SimpleGrantedAuthority("ROLE_" + customer.getRole())
			    );

			    System.out.println("AUTHORITIES = " + authorities);

			    return authorities;

	 }

	@Override
	public @Nullable String getPassword() {
		// TODO Auto-generated method stub
		return customer.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return customer.getEmail();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}
	
}
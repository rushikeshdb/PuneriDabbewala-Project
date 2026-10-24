package org.tech.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Table
@Entity
public class Customer {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long pk_id;
	
	@NotBlank(message = "First name is required")
	@Column
	private String firstName;
	
	@NotBlank(message = "Last name is required")
	@Column
	private String lastName;
	
	@NotBlank(message="Email required")
	@Email(message = "Invalid email format")
	@Column
	private String email;
	
	@NotBlank(message = "Contact Number required")
	@Pattern(regexp = "^[0-9]{10}$", message = "Contact must be 10 digits")
	@Column
	private String contact;
	
	@NotBlank(message="Password required")
	@Size(min = 6, message = "Password must be at least 6 characters")
	@Column
	private String password;
	
	@Column
	private boolean active=true;
	
	@Column
	private String role = "CUSTOMER";
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public Long getPk_id() {
		return pk_id;
	}
	public void setPk_id(Long pk_id) {
		this.pk_id = pk_id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public boolean isActive() {
		return active;
	}
	public void setActive(boolean active) {
		this.active = active;
	}
}

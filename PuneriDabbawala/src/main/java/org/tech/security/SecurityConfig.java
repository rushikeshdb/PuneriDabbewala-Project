//package org.tech.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//    @Autowired
//    private UserDetailsService userDetailsService;
//
//    @Autowired
//    private JwtFilter jwtFilter;
//
//    @Autowired
//    private OAuth2SuccessHandler oAuth2SuccessHandler;
//
//    @Bean
//    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//
//        System.out.println("Getting Call to security Config");
//
//        http
//            .cors(cors -> cors.configure(http))
//
//            .csrf(csrf -> csrf.disable())
//
//            .formLogin(form -> form.disable())
//
//            .authorizeHttpRequests(request -> request
//
//                .requestMatchers(
//                    "/regCustomer",
//                    "/login",
//                    "/forgot-password",
//                    "/verify-otp",
//                    "/swagger-ui/**",
//                    "/swagger-ui.html",
//                    "/v3/api-docs/**",
//                    "/oauth2/**",
//                    "/login/oauth2/**"
//                ).permitAll()
//
//                .requestMatchers("/admin/**")
//                .hasRole("ADMIN")
//
//                .requestMatchers("/customer/**")
//                .hasRole("CUSTOMER")
//
//                .anyRequest()
//                .authenticated()
//            )
//
//            .oauth2Login(oauth -> oauth
//                .successHandler(oAuth2SuccessHandler)
//            )
//
//            .sessionManagement(session ->
//                session.sessionCreationPolicy(
//                    SessionCreationPolicy.IF_REQUIRED
//                )
//            )
//
//            .addFilterBefore(
//                jwtFilter,
//                UsernamePasswordAuthenticationFilter.class
//            );
//
//        return http.build();
//    }
//
//    @Bean
//    public BCryptPasswordEncoder passwordEncoder() {
//        return new BCryptPasswordEncoder(12);
//    }
//
//    @Bean
//    AuthenticationProvider authenticationProvider() {
//
//        DaoAuthenticationProvider provider =
//            new DaoAuthenticationProvider(userDetailsService);
//
//        provider.setPasswordEncoder(passwordEncoder());
//
//        return provider;
//    }
//
//    @Bean
//    public AuthenticationManager authenticationManager(
//            AuthenticationConfiguration config) throws Exception {
//
//        return config.getAuthenticationManager();
//    }
//}

package org.tech.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private JwtFilter jwtFilter;
	
	@Autowired
	private OAuth2SuccessHandler oAuth2SuccessHandler;
	
	@Bean
	 SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
		System.out.println("Getting Call to security Config");
		http.cors(Customizer.withDefaults());
		http.csrf(csrf -> csrf.disable());
		http.formLogin(form -> form.disable());
		//http.csrf(Customizer.withDefaults());
		//http.csrf(customizer -> customizer.disable());
		http.authorizeHttpRequests(request -> request
				.requestMatchers("/regCustomer","/login","/forgot-password","/verify-otp","/swagger-ui/**",
		                "/swagger-ui.html","/v3/api-docs/**","/oauth2/**",
		                "/login/oauth2/**")
				.permitAll()
				.requestMatchers("/admin/**")
		        .hasRole("ADMIN")
		        .requestMatchers("/customer/**")
		        .hasRole("CUSTOMER")
				.anyRequest().authenticated()
		)
		
		.oauth2Login(oauth -> oauth
			    .successHandler(oAuth2SuccessHandler)
			);

		http.sessionManagement(session ->
		    session.sessionCreationPolicy(SessionCreationPolicy.IF_REQUIRED)
		);
		//http.formLogin(Customizer.withDefaults());
		//http.httpBasic(Customizer.withDefaults());
		//http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));
		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
		return http.build();
	}
	
	@Bean
	public org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder passwordEncoder() {
	    return new org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder();
	}
		
	@Bean
	AuthenticationProvider authenticationProvider() {
	    DaoAuthenticationProvider provider =
	            new DaoAuthenticationProvider(userDetailsService);
	    
	    provider.setPasswordEncoder(new BCryptPasswordEncoder(12));
	    
	    return provider;
	}
	
	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception{
		return config.getAuthenticationManager();
	}

}


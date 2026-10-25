package org.tech.otp.utility;

import java.util.Random;

public class GenerateOtpUtility {
	
	public String generateOtp(){

	    Random random = new Random();

	    int otp =
	        100000 + random.nextInt(900000);


	    return String.valueOf(otp);
	}
}
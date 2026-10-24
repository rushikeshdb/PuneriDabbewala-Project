import React, { useState, useEffect } from "react";
import { sendOtp } from "../helper";
import { verifyOtp } from "../helper";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [message, setMessage] = useState("");
    const [timeLeft, setTimeLeft] = useState(0);

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);

    }, [timeLeft]);

    const handleSendOtp = async () => {
        if (!email) {
            setMessage("Please enter your email.");
            return;
        }   
        try {
            const response = await sendOtp(email)
            setOtpSent(true);
            setTimeLeft(30);
            setMessage(response.data);

            setTimeout(() => {
                setMessage("");
            }, 2000);
        } catch (error) {
            console.log(error)
            if (error.response) {
                setMessage(error.response.data);
            } else {
                setMessage("Unable to connect to the server.");
            }
            setTimeout(() => {
                setMessage("");
            }, 2000);
        }
    };

    const handleValidateOtp = async () => {
        if (!otp) {
            setMessage("Please enter the OTP.");
            return;
        }
    
        try {
            const response = await verifyOtp({
                email: email,
                otp: otp
            });
            console.log(response)
            setMessage(response.data);
    
            // OTP verified successfully
            // You can now enable the Reset Password section
            // Example:
            // setOtpVerified(true);
    
            setTimeout(() => {
                setMessage("");
            }, 2000);
    
        } catch (error) {
    
            if (error.response) {
                setMessage(error.response.data);
            } else {
                setMessage("Unable to connect to the server.");
            }
    
            setTimeout(() => {
                setMessage("");
            }, 2000);
        }
    };


    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">

            <div className="bg-black text-white p-8 w-[450px] rounded-xl shadow-2xl">

                <h2 className="text-3xl text-orange-400 font-bold text-center mb-8">
                    Forgot Password
                </h2>


                <div className="mb-5">

                    <label className="text-lg">
                        Email Address<span className="text-red-500">*</span>
                    </label>

                    <input
                        type="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="w-full mt-2 p-3 border border-gray-500 rounded-md outline-none"
                    />

                </div>


                {
                    otpSent && (
                        <div className="mb-5">

                            <label className="text-lg">
                                Enter OTP<span className="text-red-500">*</span>
                            </label>

                            <input
                                type="text"
                                placeholder="Enter 6 digit OTP"
                                value={otp}
                                onChange={(e)=>setOtp(e.target.value)}
                                className="w-full mt-2 p-3 rounded-md border border-gray-500 outline-none"
                            />

                            {/* Timer */}
                            <p className="text-sm text-orange-400 mt-2">
                                {timeLeft > 0
                                    ? `OTP expires in ${timeLeft} seconds`
                                    : "OTP expired. Please resend OTP."
                                }
                            </p>

                        </div>
                    )
                }


                <div className="flex justify-center gap-3">

                    <button
                        onClick={handleSendOtp}
                        className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg text-lg font-semibold"
                    >
                        Send OTP
                    </button>


                    {
                        otpSent && (
                            <button
                                onClick={handleValidateOtp}
                                className="bg-green-500 hover:bg-green-600 px-5 py-3 rounded-lg text-lg font-semibold"
                            >
                                Validate OTP
                            </button>
                        )
                    }

                </div>


                {
                    message && (
                        <p className="text-center text-green-400 mt-5 text-lg">
                            {message}
                        </p>
                    )
                }

            </div>

        </div>
    );
}

export default ForgotPassword;
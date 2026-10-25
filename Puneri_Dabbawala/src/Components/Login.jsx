
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, loginWithGoogle } from "../helper.js";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // Common error state
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });

    // Clear error when user starts typing in that field
    setError({
      ...error,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setError({
      email: "",
      password: "",
    });

    let isValid = true;

    // Email validation
    if (loginData.email.trim() === "") {
      setError((prev) => ({
        ...prev,
        email: "Please enter email",
      }));

      isValid = false;
    }

    // Password validation
    if (loginData.password.trim() === "") {
      setError((prev) => ({
        ...prev,
        password: "Please enter password",
      }));

      isValid = false;
    }

    // Do not call API if validation fails
    if (!isValid) {
      return;
    }

    // Login API call
    loginUser(loginData)
      .then((response) => {
        console.log("Login response:", response.data);

        const token = response.data.token;
        const role = response.data.role;

        localStorage.setItem("token", token);
        localStorage.setItem("role", role);

        if (role === "ADMIN") {
          navigate("/getAllCustomers");
        } else if (role === "CUSTOMER") {
          navigate("/meal");
        }
      })
      .catch((error) => {
        console.log(error);

        // Wrong email/password error
        setError((prev) => ({
          ...prev,
          password: "Invalid email or password",
        }));
      });
  };
      const handleGoogleLogin = () => {
    loginWithGoogle();
  };
  return (
    <div className="flex justify-center items-center h-screen">

      <div className="border p-3 bg-black w-xl rounded-md shadow shadow-black">

        <h1 className="text-orange-500 text-4xl font-bold mb-5 text-center">
          Login Form
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Email Field */}
          <div className="mb-5 text-white text-lg">

            <label htmlFor="email">
              Email:
            </label>

            <br />

            <input
              id="email"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="p-1 pl-2 border border-gray-300 rounded-md outline-none w-full"
            />

            {/* Email Error */}
            {error.email && (
              <div className="text-red-500 text-sm mt-1">
                {error.email}
              </div>
            )}

          </div>


          {/* Password Field */}
          <div className="mb-5 text-white text-lg">

            <label htmlFor="password">
              Password:
            </label>

            <br />

            <input
              id="password"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              className="p-1 pl-2 border border-gray-300 rounded-md outline-none w-full"
            />

            {/* Password Error */}
            {error.password && (
              <div className="text-red-500 text-sm mt-1">
                {error.password}
              </div>
            )}

          </div>


          {/* Remember Me / Forgot Password */}
          <div className="flex justify-between text-white mb-3">

            <div>

              <input
                className="ms-1 me-2"
                type="checkbox"
              />

              <span>
                Remember me
              </span>

            </div>

            <div className="underline">

              <Link
                to="/forgot-password"
                className="text-blue-500"
              >
                Forgot Password?
              </Link>

            </div>

          </div>


          {/* Login Button */}
          <div className="mb-3 text-center flex justify-center">

            <button
              type="submit"
              className="text-xl w-92 bg-orange-500 p-2 rounded-lg font-medium"
            >
              Login
            </button>

          </div>

           {/* OR */}
          <div className="flex items-center my-4">

            <div className="flex-1 border-t border-gray-500"></div>

            <span className="px-3 text-white">
              OR
            </span>

            <div className="flex-1 border-t border-gray-500"></div>

          </div>


          {/* Google Button */}
          <div className="mb-4 flex justify-center">

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="text-xl w-92 bg-white text-black p-2 rounded-lg font-medium hover:bg-gray-200 flex items-center justify-center"
            >
              <FcGoogle className="mr-3 text-2xl" />

              Sign up with Google
            </button>

          </div>


          {/* Register */}
          <div className="mb-3 text-white text-center">

            <p>
              Don't have an account?{" "}

              <Link
                to="/regCustomer"
                className="text-blue-500 underline"
              >
                Register here
              </Link>

            </p>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Login;


import React from 'react'
import { Link} from 'react-router-dom'
import {useState} from 'react'
import { registerCustomer } from '../helper'
const Registration = () => {
    
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        password: "",
        cnfpassword: ""
    })

    const [message, setMessage] = useState("");

    async function  handleSubmit(e){
        e.preventDefault();

        if (!validate()) {
            return;
        }

        try{
            const response = await registerCustomer(input);
            console.log("Success: ",response.data)

            setMessage("Customer registered successfully!");
            
            setTimeout(() => {
                setMessage("");
            }, 6000);

            setInput({
                firstName: "",
                lastName: "",
                email: "",
                contact: "",
                password: "",
                cnfpassword: ""
            })
        }
        catch(e){
            //console.log("Error: ",e);
            if (e.response?.status === 400) {
                setErrors(e.response.data);
            }
        }
    }

    function handleChange(e){
        const { name, value } = e.target;

        setInput(prev => ({...prev, [name]: value}));
    }

    const [errors, setErrors] = useState({});

    function validate() {
        const newErrors = {};
    
        if (!input.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }
    
        if (!input.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }
    
        if (!input.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(input.email)) {
            newErrors.email = "Invalid email";
        }
    
        if (!/^\d{10}$/.test(input.contact)) {
            newErrors.contact = "Enter a valid 10-digit number";
        }
    
        if (input.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        
        if (input.password !== input.cnfpassword) {
            alert("hello")
            newErrors.cnfpassword = "Passwords do not match";
        }
        
        setErrors(newErrors);
    
        return Object.keys(newErrors).length === 0;
    }

    return (
        <div className="flex justify-center items-center h-screen m-5">
            <div className="border p-3 bg-black w-2xl rounded-md shadow shadow-black" id="loginFormDiv">
             <h1 className="text-orange-400 text-4xl font-bold mb-5 text-center">Registration Form</h1>
               <form name="regForm" action="regCustomer" method="post" onSubmit={handleSubmit}>
                    <div className="mb-3 text-lg text-white flex justify-between">
                        <div className="">
                            <label className="" htmlFor="fname" >First Name</label>
                            <span className="text-red-500">*</span><br></br>
                            <input id="fname" type="text" placeholder="Enter First Name" 
                            name="firstName" value={input.firstName} onChange={handleChange} 
                            className="p-1 pl-2 border border-gray-300 
                            rounded-md outline-none w-[300px]"></input>
                            {errors.firstName && (
                                <p className="text-red-500 text-sm">
                                    {errors.firstName}
                                </p>
                            )}
                        </div>  
                        <div className="">
                            <label className="" htmlFor="lname">Last Name</label>
                            <span className="text-red-500">*</span><br></br>
                            <input id="lname" type="text" placeholder="Enter Last Name" 
                            name="lastName" value={input.lastName} onChange={handleChange} 
                            className="p-1 pl-2 border border-gray-300 
                            rounded-md outline-none w-[300px]"></input>
                            {errors.lastName && (
                                <p className="text-red-500 text-sm">
                                    {errors.lastName}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="mb-3 text-white text-lg">
                        <label htmlFor="email">Email</label>
                        <span className="text-red-500">*</span><br></br>
                        <input id="email" type="email" placeholder="Enter Your Email" 
                        name="email" value={input.email} onChange={handleChange} 
                        className="p-1 pl-2 border border-gray-300 
                        rounded-md outline-none w-full"></input>
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="mb-3 text-white text-lg">
                        <label htmlFor="contact">Mobile No</label>
                        <span className="text-red-500">*</span><br></br>
                        <input id="contact" type="tel" placeholder="Enter Your Contact" 
                        name="contact" value={input.contact} onChange={handleChange} 
                        className="p-1 pl-2 border border-gray-300 
                        rounded-md outline-none w-full"></input>
                        {errors.contact && (
                            <p className="text-red-500 text-sm">
                                {errors.contact}
                            </p>
                        )}
                    </div>
                    <div className="mb-3 text-white text-lg">
                        <label htmlFor="password">Password</label>
                        <span className="text-red-500">*</span><br></br>
                        <input id="password" type="password" placeholder="Enter Password" 
                        name="password" value={input.password} onChange={handleChange} 
                        className="p-1 pl-2 border border-gray-300 
                        rounded-md outline-none w-full"></input>
                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password}
                            </p>
                        )}
                    </div>
                    <div className="mb-3 text-white text-lg">
                        <label htmlFor="cnfpassword">Confirm Password:</label>
                        <span className="text-red-500">*</span><br></br>
                        <input id="cnfpassword" type="password" placeholder="Confirm Password" 
                        name="cnfpassword" value={input.cnfpassword} onChange={handleChange} 
                        className="p-1 pl-2 border border-gray-300 
                        rounded-md outline-none w-full"></input>
                        {errors.cnfpassword && (
                            <p className="text-red-500 text-sm">
                                {errors.cnfpassword}
                            </p>
                        )}
                    </div>
                    <div className="mb-3 text-center flex justify-center">
                        <button type="submit" id="registerBtn" className="text-xl bg-orange-500 p-3 block w-sm rounded-lg font-medium">Register</button>
                    </div>
                    <div className="text-center mb-3">
                        <span className={`text-green-400 text-[18px] transition-all duration-500 
                        ${message ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`
                        }
                        >
                        {message}
                        </span>
                    </div>
                    <div className="mb-3 text-white text-center text-md">
                        <p>Already have an account? <Link  to="/login" className="text-blue-500">Login here</Link></p>
                    </div>
               </form>
            </div>
        </div>
    )
}

export default Registration
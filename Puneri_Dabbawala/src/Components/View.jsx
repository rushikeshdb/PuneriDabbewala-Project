import React from 'react'
import { getCustomerById } from '../helper'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router'

const View = () => {

    const { cid } = useParams();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: ""
      });
    
      useEffect(() => {
        if (cid) {
          loadCustomer();
        }
      }, [cid]);
    
      const loadCustomer = async () => {
        try {
          const res = await getCustomerById(cid);
    
          const cust = res.data;
          console.log("API DATA:", cust);
          // since your backend returns array
          setForm({ 
            firstName: cust?.firstName || "",
            lastName: cust?.lastName || "",
            email: cust?.email || "",
            contact: cust?.contact || ""
          });
      
        } catch (err) {
          console.log("Error fetching customer:", err);
        }
      };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Customer Details
                </h2>

                <form className="space-y-5">

                    <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="">First Name</label>
                        <input 
                        type="text" name="firstName" value={form.firstName} disabled
                        className="w-full mt-1 p-3 border bg-gray-100 rounded-lg text-gray-700 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="">Last Name</label>
                        <input
                        type="text" name="lastName" value={form.lastName} disabled
                        className="w-full mt-1 p-3 border bg-gray-100 rounded-lg text-gray-700 cursor-not-allowed"
                        />
                    </div>
                    </div>

                    <div>
                    <label className="">Email</label>
                    <input
                        type="email" name="email" value={form.email} disabled
                        className="w-full mt-1 p-3 border bg-gray-100 rounded-lg text-gray-700 cursor-not-allowed"
                    />
                    </div>

                    <div>
                    <label className="">Contact</label>
                    <input
                        type="text" name="contact" value={form.contact} disabled
                        className="w-full mt-1 p-3 border bg-gray-100 rounded-lg text-gray-700 cursor-not-allowed"
                    />
                    </div>

                    <div className="flex justify-center mt-6">
                    <Link
                        to="/getAllCustomers"
                        className="px-6 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"  
                    >
                        Go Back
                    </Link>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default View
import React from 'react'
import { getCustomerById, updateCustomer } from '../helper'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Update = () => {

    const { cid } = useParams();
    const navigate = useNavigate();
    
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
      
      function handleChange(e){
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}));
      }

      async function  handleSubmit(e){
        e.preventDefault();
        console.log("Cid is :",cid)
        try{
            const response = await updateCustomer(cid, form);
            console.log("Success: ",response.data)

            //setMessage("Customer Updated successfully!");
            
            // setTimeout(() => {
            //     setMessage("");
            // }, 6000);
            
            navigate('/getAllCustomers');
        }
        catch(e){
            console.log("Error: ",e);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
  
  <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
    
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Update Customer
    </h2>

    <form className="space-y-5" action="updateCustomer" method="post" onSubmit={handleSubmit}>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-gray-600 text-sm">First Name</label>
          <input
            type="text" name="firstName" value={form.firstName} onChange={handleChange}
            placeholder="Enter first name"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>

        <div>
          <label className="text-gray-600 text-sm">Last Name</label>
          <input
            type="text" name="lastName" value={form.lastName} onChange={handleChange}
            placeholder="Enter last name"
            className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-gray-600 text-sm">Email</label>
        <input
          type="email" name="email" value={form.email} onChange={handleChange}
          placeholder="Enter email"
          className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      <div>
        <label className="text-gray-600 text-sm">Contact</label>
        <input
          type="tel" name="contact" value={form.contact} onChange={handleChange}
          placeholder="Enter contact number"
          className="w-full mt-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
        />
      </div>

      <div className="flex justify-center gap-3 mt-6">
        <Link
          to="/getAllCustomers"
          className="bg-red-500 text-white px-6 py-2 rounded-lg bg-red-300 hover:bg-red-600 transition"
        >
          Go Back
        </Link>

        <button
          type="submit"
          className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-800 transition shadow-md"
        >
          Update
        </button>
      </div>

    </form>
  </div>

</div>
    )
}

export default Update
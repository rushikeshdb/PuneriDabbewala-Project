import React from 'react'
import {getAllCustomers, deleteCustomerById} from '../helper'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom' 
import { useNavigate } from "react-router-dom";
const AdminPannel = () => {

    const [customers, setCustomers] = useState([])
    
    useEffect(() => {
        // fetchCustomers()
        getAllCustomers()
            .then((res) => {
                setCustomers(res.data)
                console.log(res.data)
                console.log("API CALLED");
            })
            .catch((err) => {
                console.log("Error is : ",err);
            });
    }, [])

    // const fetchCustomers = async () => {
    //     try {
    //         const response = await getAllCustomers();
    //         console.log(response.data);
    //         setCustomers(response.data);
    //     } catch (error) {
    //         console.log("Error fetching customers:", error);
    //     }
    // };
    const handleDelete = async (cid) => {
        alert("hello from delete")
        console.log("Customer id is :",cid);
        try {
          await deleteCustomerById(cid);
          
          // remove deleted user from UI instantly
          const res = await getAllCustomers();
          setCustomers(res.data);
        } catch (err) {
          console.log("Delete error:", err);
        }
      };
      const navigate = useNavigate();
      const handleLogout = () => {
        localStorage.removeItem("token");   // Remove JWT
        // Optional: remove any other stored data
        localStorage.removeItem("user");
    
        navigate("/login");                 // Redirect to login page
    };
    return (
        <div className="flex justify-center m-3">
            <div className="tableDiv text-lg border">
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                    Logout
                </button>
                <h1 className="text-3xl font-bold mb-3 text-center">Customer Details</h1>
                <table className="border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 border">First Name</th>
                            <th className="p-2 border">Last Name</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">Contact</th>
                            <th className="p-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((cust, index) => (
                            <tr key={index} className="">
                                <td className="p-2 border">{cust[1]}</td>
                                <td className="p-2 border">{cust[2]}</td>
                                <td className="p-2 border">{cust[3]}</td>
                                <td className="p-2 border">{cust[4]}</td>
                                <td className="p-2 border">
                                    <Link to={`/view/${cust[0]}`} className="bg-blue-500 text-lg text-white rounded p-2">
                                        <i className="fa-solid fa-eye"></i>
                                    </Link>
                                    <Link to={`/updatePage/${cust[0]}`} className="bg-green-500 text-lg text-white rounded p-2 mx-2">
                                        <i className="fa-solid fa-file-pen"></i>
                                    </Link>
                                    <button
                                    onClick={() => handleDelete(cust[0])}  // assuming id is at index 4
                                    className="bg-red-500 text-lg text-white rounded p-1 px-2"
                                    >
                                    <i  className="fa-solid fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminPannel
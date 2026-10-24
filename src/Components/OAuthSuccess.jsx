import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthSuccess = () => {

    const navigate = useNavigate();

    useEffect(() => {
        console.log("FULL URL:", window.location.href);
        console.log("SEARCH:", window.location.search);
        const params = new URLSearchParams(window.location.search);

        const token = params.get("token");
        const role = params.get("role");

        console.log("OAuthSuccess component loaded");

        console.log("Google Token:", token);
        console.log("Google Role:", role);

        if (token && role) {

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);

            if (role === "ADMIN") {

                navigate("/getAllCustomers");

            } else if (role === "CUSTOMER") {

                navigate("/home");

            } else {

                navigate("/login");
            }

        } else {
            navigate("/login");
        }

    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen">

            <h2 className="text-2xl">
                Logging in...
            </h2>

        </div>
    );
};

export default OAuthSuccess;
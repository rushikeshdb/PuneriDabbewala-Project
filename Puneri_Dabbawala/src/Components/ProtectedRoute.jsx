// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   const token = localStorage.getItem("token");

//   return token ? <Outlet /> : <Navigate to="/login" replace />;
// };

// export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

    const token = localStorage.getItem("token");

    console.log("ProtectedRoute token:", token);

    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
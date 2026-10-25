import React from 'react'
import Login from './Components/Login'
import Registration from './Components/Registration'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AdminPannel from './Components/AdminPannel'
import Update from './Components/Update'
import View from './Components/View'
import Home from './Components/Home'
import Contact from './Components/Contact'
import AboutUs from './Components/AboutUs'
import Services from './Components/Services'
import Dashboard from './Components/Dashboard'
import ProtectedRoute from './Components/ProtectedRoute'
import NotFound from "./Components/NotFound";
import ForgotPassword from './Components/ForgotPassword'
import Meal from './Components/Meal'
import OAuthSuccess from "./Components/OAuthSuccess";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regCustomer" element={<Registration />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/oauth-success" element={<OAuthSuccess />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/getAllCustomers" element={<AdminPannel />} />
            <Route path="/updatePage/:cid" element={<Update />} />
            <Route path="/view/:cid" element={<View />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/meal" element={<Meal />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default App
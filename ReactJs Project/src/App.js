import React from 'react'
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from './website/pages/Home'
import About from './website/pages/About'
import Packages from './website/pages/Packages';
import Contact from './website/pages/Contact';
import Destination from './website/pages/Destination';
import Testimonial from './website/pages/Testimonial';
import Login from "./website/pages/Login";
import Signup from "./website/pages/Signup";
import Traveller_Profile from "./website/pages/Traveller_Profile";
import Traveller_Edit from "./website/pages/Traveller_Edit";
import PNF from './website/pages/PNF';
import ViewBookedTour from './website/pages/ViewBookedTour';


import Admin_login from "./admin/pages/Admin_login";
import Dashboard from "./admin/pages/Dashboard";
import Add_Destination from './admin/pages/Add_Destination';
import Add_Package from './admin/pages/Add_Package';
import Add_Travel_Agent from './admin/pages/Add_Travel_Agent';
import View_Bookings from './admin/pages/View_Bookings';
import Manage_Destination from './admin/pages/Manage_Destination';
import Manage_Package from './admin/pages/Manage_Package';
import Manage_Travellers from './admin/pages/Manage_Travellers';
import Manage_Travel_Agent from './admin/pages/Manage_Travel_Agent';
import Manage_contact from "./admin/pages/Manage_contact";

// add 2 lines for toast notification
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Manage_Booked_Tour from './admin/pages/Manage_Booked_Tour';


function App() {
  return (
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Routes>
          <Route path="/" element={<><Home/></>}></Route>
          <Route path="/about" element={<><About/></>}></Route>
          <Route path="/package" element={<><Packages/></>}></Route>
          <Route path="/contact" element={<><Contact/></>}></Route>
          <Route path="/destination" element={<><Destination/></>}></Route>
          <Route path="/testimonial" element={<><Testimonial/></>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/traveller_profile" element={<Traveller_Profile/>}></Route>
          <Route path="/traveller_edit/:id" element={<Traveller_Edit/>}></Route>
          <Route path="/view_booked_tour" element={<><ViewBookedTour/></>}></Route>
          <Route path="/manage_booked_tour" element={<><Manage_Booked_Tour/></>}></Route>
          <Route path="*" element={<PNF/>}></Route>
          {
          //admin  
          }
          <Route path="/admin-login" element={<Admin_login/>}></Route>
          <Route path="/dashboard" element={<><Dashboard/></>}></Route>
          <Route path="/traveller" element={<><Manage_Travellers/></>}></Route>
          <Route path="/add_travel_agents" element={<><Add_Travel_Agent/></>}></Route>
          <Route path="/manage_travel_agents" element={<><Manage_Travel_Agent/></>}></Route>
          <Route path="/manage_contact" element={<><Manage_contact/></>}></Route>
          <Route path="/add_destination" element={<><Add_Destination/></>}></Route>
          <Route path="/manage_destination" element={<><Manage_Destination/></>}></Route>
          <Route path="/add_package" element={<><Add_Package/></>}></Route>
          <Route path="/manage_package" element={<><Manage_Package/></>}></Route>
          <Route path="/view_bookings" element={<><View_Bookings/></>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

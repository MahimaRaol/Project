import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Aheader from '../common/Aheader';
import { Helmet } from 'react-helmet'

function Add_Travel_Agent() {

    const redirect = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('adminid')) {
        }
        else {
            redirect('/admin-login')
        }
    })
    const adminlogout = () => {

        localStorage.removeItem('adminid');
        localStorage.removeItem('adminname');
        toast.success('Logout Success');
        redirect('/admin-login');

    }

    useEffect(() => {
        fetch();
    });

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/destination`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        dest_id: "",
        destination_name: "",
        address: "",
        role: "",
        agency_name: "",
        profile_picture: "",
        assigned_customers: "",
        total_bookings: "",
        status: "",
      })

      const changeHandel = (e) => {
        if (e.target.name === "phone_number" && e.target.value.length > 10) {
            return;
        }
        setFormvalue({...formvalue, id: new Date().getTime().toString(), role: "Travel Agent",[e.target.name]: e.target.value});
      };
    
      function validation() {
        let isValid = true;
    
        // First Name Validation
        if (!formvalue.first_name.trim()) {
          isValid = false;
          toast.error("First Name is required!");
        } else if (!/^[A-Za-z\s]+$/.test(formvalue.first_name)) {
          isValid = false;
          toast.error("First Name should only contain alphabets!");
        }
    
        // Last Name Validation
        if (!formvalue.last_name.trim()) {
          isValid = false;
          toast.error("Last Name is required!");
        } else if (!/^[A-Za-z\s]+$/.test(formvalue.last_name)) {
          isValid = false;
          toast.error("Last Name should only contain alphabets!");
        }
    
        // Email Validation
        if (!formvalue.email.trim()) {
          isValid = false;
          toast.error("Email is required!");
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formvalue.email)) {
          isValid = false;
          toast.error("Please enter a valid email address!");
        }
    
        // Phone Number Validation
        if (!formvalue.phone_number.trim()) {
            isValid = false;
            toast.error("Phone Number is required!");
        } else if (!/^\d{10}$/.test(formvalue.phone_number)) {
            isValid = false;
            toast.error("Phone Number must be a 10-digit number!");
        }

        // Address Validation
        if (!formvalue.address.trim()) {
            isValid = false;
            toast.error("Address is required!");
        }

        // Agency Name Validation
        if (!formvalue.agency_name.trim()) {
            isValid = false;
            toast.error("Agency Name is required!");
        }
    
        // Profile Picture URL Validation
        if (!formvalue.profile_picture.trim()) {
            isValid = false;
            toast.error("Profile Picture URL is required!");
        } else if (
        !/^(https?:\/\/[^\s]+)$/.test(formvalue.profile_picture)
        ) {
        isValid = false;
        toast.error("Please provide a valid URL!");
        }

         // Assigned Customers Validation
         if (!formvalue.assigned_customers.trim()) {
            isValid = false;
            toast.error("Assigned Customers is required!");
        }

        // Total Bookings Validation
        if (!formvalue.total_bookings.trim()) {
          isValid = false;
          toast.error("Total Bookings is required!");
        }

        // Status Validation
        if (!formvalue.status.trim()) {
            isValid = false;
            toast.error("Status is required!");
        }

        // Destination Validation
        if (!formvalue.dest_id.trim()) {
            isValid = false;
            toast.error("Destination is required!");
        }
        
    
        return isValid;
      }

      const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
          const res = await axios.post(`http://localhost:3000/travel-agent`, formvalue);
          toast.success('Travel-Agent Submitted Successfully');
          setFormvalue({ ...formvalue, first_name: "", last_name: "", email: "" ,phone_number: "", dest_id: "", destination_name: "" , address: "", role: "", agency_name: "", profile_picture: "", assigned_customers: "", status: "",total_bookings: ""});
          return false;
        }
      }

  return (
    <div>
        <Aheader/>

        <div className="container-fluid py-5">
            <div className="container py-5">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Travel Agent</h6>
                <h1>Add Travel Agent</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="contact-form bg-white" style={{padding: 30}}>
                    <div id="success" />
                    <form form className="form" method="post" action="" onSubmit={submitHandel}>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.first_name} name="first_name" placeholder="First Name (e.g., John)" />
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.last_name} name="last_name" placeholder="Last Name (e.g., Doe)" />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input type="email" className="form-control p-4" onChange={changeHandel} value={formvalue.email} name="email" placeholder="Email (e.g., john.doe@example.com)" />
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="tel" className="form-control p-4" onChange={changeHandel} value={formvalue.phone_number} name="phone_number" placeholder="Phone Number (10 digits)" maxLength="10"/>
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.agency_name} name="agency_name" placeholder="Agency Name" />
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                            <input type="url" className="form-control p-4" onChange={changeHandel} value={formvalue.profile_picture} name="profile_picture" placeholder="Profile Picture URL" />
                            <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input type="number" className="form-control p-4" onChange={changeHandel} value={formvalue.assigned_customers} name="assigned_customers" placeholder="Assigned Customer" />
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="number" className="form-control p-4" onChange={changeHandel} value={formvalue.total_bookings} name="total_bookings" placeholder="Total Bookings" />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                            <select name="status" value={formvalue.status} onChange={changeHandel} className="form-control" style={{appearance: 'auto'}}>
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="control-group col-sm-6">
                            <select name="dest_id" value={formvalue.dest_id} onChange={changeHandel} className="form-control" style={{appearance: 'auto'}}>
                                <option value="">Select Destination</option>
                                {
                                    data && data.map((value, index, arr) => {
                                        return (
                                            <option value={value.id}>
                                                {value.destination_name}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <br />
                        <br />
                        <div className="form-row">
                            <div className="control-group col-sm-12">
                                    <textarea className="form-control p-4" onChange={changeHandel} value={formvalue.address} name="address" placeholder="Address" rows="5" cols="50"></textarea>
                                    <p className="help-block text-danger" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary py-3 px-4" type="submit">Add Travel Agent</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>

        <Helmet>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            <script src="admin/lib/easing/easing.min.js"></script>
            <script src="admin/lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="admin/mail/jqBootstrapValidation.min.js"></script>
            <script src="admin/mail/contact.js"></script>
        </Helmet>
        
    </div>
  )
}

export default Add_Travel_Agent
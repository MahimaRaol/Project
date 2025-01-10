/* global $ */
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Aheader from '../common/Aheader';

function Manage_Travel_Agent() {

    const redirect = useNavigate();
        useEffect(() => {
            if (!localStorage.getItem('adminid')) {
              redirect('/admin-login');
            }
          }, [redirect]);

    const adminlogout = () => {

        localStorage.removeItem('adminid');
        localStorage.removeItem('adminname');
        toast.success('Logout Success');
        redirect('/admin-login');
    }

    const [travelAgents, setTravelAgents] = useState([]);
    const [destinations, setDestinations] = useState([]);
  
    useEffect(() => {
      fetch();
    }, []);
  
    const fetch = async () => {
      try {
        // Fetch both travel agents and destinations
        const travelAgentsRes = await axios.get("http://localhost:3000/travel-agent");
        const destinationsRes = await axios.get("http://localhost:3000/destination");
  
        // Store the fetched destinations
        setDestinations(destinationsRes.data);
  
        // Map destination names to travel agents based on dest_id
        const updatedTravelAgents = travelAgentsRes.data.map((agent) => {
          const destination = destinationsRes.data.find((dest) => dest.id === agent.dest_id);
          return {
            ...agent,
            destination_name: destination ? destination.destination_name : "N/A", // Assign the destination name
          };
        });
  
        // Update each travel agent with the destination name in the JSON server
        const updatePromises = updatedTravelAgents.map((agent) =>
          axios.put(`http://localhost:3000/travel-agent/${agent.id}`, agent)
        );
  
        await Promise.all(updatePromises); // Wait for all updates to finish
  
        setTravelAgents(updatedTravelAgents);
        console.log("Travel agents updated successfully with destination names!");
  
      } catch (error) {
        console.error("Error fetching or updating data:", error);
      }
    };
  


    const deleteHandel=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/travel-agent/${id}`);
        toast.success("Delete Travel Agent Successfully");
        fetch();
    }
    const [formvalue, setFormvalue] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        destination_name: "",
        address: "",
        role: "",
        agency_name:"",
        profile_picture: "",
        assigned_customers: "",
        total_bookings: "",
        status: ""
      })

    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/travel-agent/${id}`);
        setFormvalue(res.data);
        $('#myModal').modal('show'); // Open modal when editing
    }
    
    const changeHandel = (e) => {
    if (e.target.name === "phone_number" && e.target.value.length > 10) {
        return;
    }
    setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
    console.log(formvalue);
    }
    
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
    
        return isValid;
      }
      
    const submitHandel = async (e) => {
    e.preventDefault();
    if (validation()) {
        await axios.put(`http://localhost:3000/travel-agent/${formvalue.id}`, formvalue);
        toast.success('Travel Agent Updated Successfully!');
        fetch();
        $('#myModal').modal('hide'); // Close modal on success
    }
    };

  return (
    <div>
        <div>
        <Aheader/>
        <section className="contact-us section">
                    <div className="container">
                        <div className="inner">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="contact-us-form">
                                        <h2>Manage Travel Agent</h2>
                                        <br />
                                        <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Travel Agent ID</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Destination Name</th>
                                                    <th>Email</th>
                                                    <th>Phone Number</th>
                                                    <th>Profile Picture</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {travelAgents.map((agent, index) => (
                                                    <tr key={index}>
                                                    <td>{agent.id}</td>
                                                    <td>{agent.first_name}</td>
                                                    <td>{agent.last_name}</td>
                                                    <td>{agent.destination_name}</td>
                                                    <td>{agent.email}</td>
                                                    <td>{agent.phone_number}</td>
                                                    <td>
                                                        <img src={agent.profile_picture} width="50px" alt="Profile" />
                                                    </td>
                                                    <td>{agent.status}</td>
                                                    <td>
                                                        <button className="btn btn-primary" onClick={() => editHandel(agent.id)}>
                                                        Edit
                                                        </button>
                                                        <button className="btn btn-danger" onClick={() => deleteHandel(agent.id)}>
                                                        Delete
                                                        </button>
                                                        <button className='btn btn-Success'>{agent.role}</button>
                                                    </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                            <div className="modal" id="myModal">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        {/* Modal Header */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Edit Travel Agent</h4>
                                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                                        </div>
                                                        {/* Modal body */}
                                                        <div className="modal-body">
                                                            <form onSubmit={submitHandel}>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>First Name
                                                                            <input type="text" name="first_name" onChange={changeHandel} value={formvalue.first_name} placeholder="First Name" className="form-control"/>
                                                                            </label>
                                                                            </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>Last Name
                                                                            <input type="text" name="last_name" onChange={changeHandel} value={formvalue.last_name} placeholder="Last Name" className="form-control"/>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>email
                                                                            <input type="email" name="email" onChange={changeHandel} value={formvalue.email} placeholder="Email" className="form-control"/>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Phone Number
                                                                            <input type="tel" name="phone_number" onChange={changeHandel} value={formvalue.phone_number}  placeholder="Phone Number (10 digits)" maxLength="10" className="form-control"/>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>Profile Picture
                                                                            <input type="url" name="profile_picture" onChange={changeHandel} value={formvalue.profile_picture} placeholder="Profile Picture" className="form-control"/>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Agency Name
                                                                            <input type="text" name="agency_name" onChange={changeHandel} value={formvalue.agency_name} placeholder="Agency Name" className="form-control"/>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>status
                                                                        <select name="status" value={formvalue.status} onChange={changeHandel} style={{appearance: 'auto'}} className="form-control">
                                                                            <option value="">Select Status</option>
                                                                            <option value="Active">Active</option>
                                                                            <option value="Inactive">Inactive</option>
                                                                        </select>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>status
                                                                        <select name="dest_id" value={formvalue.dest_id} onChange={changeHandel} style={{appearance: 'auto'}} className="form-control">
                                                                            <option value="">Select Destination</option>
                                                                            {
                                                                                travelAgents.map((agent, index) => {
                                                                                    return (
                                                                                        <option value={agent.dest_id}>
                                                                                            {agent.destination_name}
                                                                                        </option>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </select>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Assigned Customer
                                                                            <input type="number" name="assigned_customers" onChange={changeHandel} value={formvalue.assigned_customers} placeholder="Assigned Customer" className="form-control"/>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Total Bookings
                                                                            <input type="number" name="total_bookings" onChange={changeHandel} value={formvalue.total_bookings} placeholder="Total Bookings" className="form-control"/>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Address
                                                                        <textarea className="form-control p-4" onChange={changeHandel} value={formvalue.address} name="address" placeholder="Address" rows="5" cols="50"></textarea>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Role
                                                                            <p>{formvalue.role}</p>
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-12">
                                                                        <div className="form-group login-btn">
                                                                            <button className="btn btn-primary" type="submit">Save</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        {/* Modal footer */}
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
        </section>

    {/* Back to Top */}
    <a href="" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up" /></a>

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

export default Manage_Travel_Agent
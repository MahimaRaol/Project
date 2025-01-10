/* global $ */
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Aheader from '../common/Aheader';

function Manage_Travellers() {

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

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/traveller`);
        setData(res.data);
    }

    const deleteHandel=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/traveller/${id}`);
        toast.success("Delete Traveller Successfully");
        fetch();
    }
    const [formvalue, setFormvalue] = useState({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: "",
        date_of_birth: "",
        gender: "",
        profile_picture: "",
        emergency_contact: "",
        address: "",
        status: "",
      })

    const [showPassword, setShowPassword] = useState(false);

    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/traveller/${id}`);
        setFormvalue(res.data);
        $('#myModal').modal('show'); // Open modal when editing
      };

    const changeHandel = (e) => {
    if (e.target.name === "phone_number" && e.target.value.length > 10) {
        return;
    }
    if (e.target.name === "emergency_contact" && e.target.value.length > 10) {
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

    // Password Validation
    if (!formvalue.password.trim()) {
      isValid = false;
      toast.error("Password is required!");
    } else if (
      !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        formvalue.password
      )
    ) {
      isValid = false;
      toast.error(
        "Password must be at least 8 characters, include one uppercase letter, one number, and one special character!"
      );
    }

    // Phone Number Validation
    if (!formvalue.phone_number.trim()) {
      isValid = false;
      toast.error("Phone Number is required!");
    } else if (!/^\d{10}$/.test(formvalue.phone_number)) {
      isValid = false;
      toast.error("Phone Number must be a 10-digit number!");
    }

    // Date of Birth Validation
    if (!formvalue.date_of_birth.trim()) {
      isValid = false;
      toast.error("Date of Birth is required!");
    }

    // Gender Validation
    if (!formvalue.gender.trim()) {
      isValid = false;
      toast.error("Gender is required!");
    }

    // Profile Picture URL Validation
    if (!formvalue.profile_picture.trim()) {
      isValid = false;
      toast.error("Profile Picture URL is required!");
    } else if (!/^(https?:\/\/[^\s]+)$/.test(formvalue.profile_picture)) {
      isValid = false;
      toast.error("Please provide a valid URL!");
    }

    // Emergency Contact Validation
    if (!formvalue.emergency_contact.trim()) {
      isValid = false;
      toast.error("Emergency Contact is required!");
    } else if (!/^\d{10}$/.test(formvalue.emergency_contact)) {
      isValid = false;
      toast.error("Emergency Contact must be a 10-digit number!");
    }

    // Address Validation
    if (!formvalue.address.trim()) {
      isValid = false;
      toast.error("Address is required!");
    }

    return isValid;
   }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            await axios.put(`http://localhost:3000/traveller/${formvalue.id}`, formvalue);
            toast.success('Traveller Updated Successfully!');
            fetch();
            $('#myModal').modal('hide'); // Close modal on success
        }
    };
    
  return (
    <div>
        <Aheader/>
        {/* <!-- Topbar Start --> */}
        <div>
    
        <section className="contact-us section">
                    <div className="container">
                        <div className="inner">
                            <div className="row">

                                <div className="col-lg-12">
                                    <div className="contact-us-form">
                                        <h2>Manage Traveller</h2>
                                        <br />
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                        <th>Traveller ID</th>
                                                        <th>First Name</th>
                                                        <th>Last Name</th>
                                                        <th>Email</th>
                                                        <th>Phone Number</th>
                                                        <th>Profile Picture</th>
                                                        <th>Gender</th>
                                                        <th>Action</th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.map((value,index,arr) => {
                                                            return (
                                                                <tr>
                                                                    <td>{value.id}</td>
                                                                    <td>{value.first_name}</td>
                                                                    <td>{value.last_name}</td>
                                                                    <td>{value.email}</td>
                                                                    <td>{value.phone_number}</td>
                                                                    <td><img src={value.profile_picture} width="50px"></img></td>
                                                                    <td>{value.gender}</td>

                                                                    <td>
                                                                        <button className="btn btn-primary" style={{ marginRight: "10px" }} onClick={() => editHandel(value.id)}>Edit</button>
                                                                        <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                                        <button className='btn btn-Success'>{value.status}</button>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        })
                                                    }

                                                </tbody>
                                            </table>
                                            <div className="modal" id="myModal">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        {/* Modal Header */}
                                                        <div className="modal-header">
                                                            <h4 className="modal-title">Edit Traveller</h4>
                                                            <button type="button" className="close" data-dismiss="modal">×</button>
                                                        </div>
                                                        {/* Modal body */}
                                                        <div className="modal-body">
                                                            <form onSubmit={submitHandel}>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                            <label>First Name
                                                                            <input type="text" name="first_name" onChange={changeHandel} value={formvalue.first_name} placeholder="First Name" select />
                                                                            </label>
                                                                            </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>Last Name
                                                                            <input type="text" name="last_name" onChange={changeHandel} value={formvalue.last_name} placeholder="Last Name" className="form-control" />
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
                                                                        <label>Password:</label>
                                                                        <div className="input-group">
                                                                            <input type={showPassword ? "text" : "password"} name="password" onChange={changeHandel} value={formvalue.password} placeholder="Enter Password" className="form-control" />
                                                                            <span className="input-group-text" style={{ cursor: "pointer" }} onClick={() => setShowPassword(!showPassword)}>
                                                                            {showPassword ? (
                                                                                <i className="bi bi-eye-slash"></i> // Eye-off icon
                                                                            ) : (
                                                                                <i className="bi bi-eye"></i> // Eye icon
                                                                            )}
                                                                            </span>
                                                                        </div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                    <div className="form-group">
                                                                        <label>Phone Number
                                                                            <input type="tel" name="phone_number" onChange={changeHandel} value={formvalue.phone_number}  placeholder="Phone Number (10 digits)"  maxLength="10" className="form-control" />
                                                                        </label>
                                                                        </div>
                                                                    </div>


                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>Date of Birth
                                                                            <input type="date" name="date_of_birth" onChange={changeHandel} value={formvalue.date_of_birth} placeholder="Profile Picture" className="form-control" />
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>Gender
                                                                        <select name="gender" value={formvalue.gender} onChange={changeHandel} style={{appearance: 'auto'}} className="form-control">
                                                                            <option value="">Select Gender</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Female">Female</option>
                                                                            <option value="Other">Other</option>
                                                                            </select>
                                                                        </label>
                                                                        </div>
                                                                    </div>
            
                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>Profile Picture
                                                                            <input type="url" name="profile_picture" onChange={changeHandel} value={formvalue.profile_picture} placeholder="Profile Picture" className="form-control" />
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>Emergency Contact No.
                                                                            <input type="tel" name="emergency_contact" onChange={changeHandel} value={formvalue.emergency_contact} placeholder="Emergency Contact No.(10 digits)"  maxLength="10" className="form-control" />
                                                                        </label>
                                                                        </div>
                                                                    </div>

                                                                    <div className="col-lg-6">
                                                                        <div className="form-group">
                                                                        <label>Address
                                                                        <textarea name="address" value={formvalue.address} onChange={changeHandel} placeholder="Your Address" className="form-control"></textarea>
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

export default Manage_Travellers
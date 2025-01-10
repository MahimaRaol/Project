import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Traveller_Edit() {
  const navigate = useNavigate();

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
  });

  const [showPassword, setShowPassword] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    fetchTravellerData();
  }, []);

  const fetchTravellerData = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/traveller/${id}`);
      const data = res.data;

      // Format the date_of_birth to 'YYYY-MM-DD' if it exists
      if (data.date_of_birth) {
        data.date_of_birth = new Date(data.date_of_birth).toISOString().split('T')[0];
      }

      setFormvalue(data);
    } catch (error) {
      console.error("Error fetching traveller data:", error);
      toast.error("Failed to load profile details.");
    }
  };

  const changeHandel = (e) => {
      if (e.target.name === "phone_number" && e.target.value.length > 10) {
        return;
    }
    if (e.target.name === "emergency_contact" && e.target.value.length > 10) {
      return;
    }
    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandel = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Use PUT for updating the existing resource
        await axios.put(`http://localhost:3000/traveller/${formvalue.id}`, formvalue);
        toast.success("Profile updated successfully!");
        navigate('/traveller_profile'); // Redirect to the profile page
      } catch (error) {
        toast.error("Failed to update profile. Please try again.");
      }
    }
  };

  function validateForm() {
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

  return (
    <div>
      <section className="text-center">
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Edit Your Profile Here</h2>
              <form className="form" action="" method="post" onSubmit={submitHandel}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      name="first_name"
                      value={formvalue.first_name}
                      onChange={changeHandel}
                      type="text"
                      placeholder="First Name (e.g., John)"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      name="last_name"
                      value={formvalue.last_name}
                      onChange={changeHandel}
                      type="text"
                      placeholder="Last Name (e.g., Doe)"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      name="email"
                      value={formvalue.email}
                      onChange={changeHandel}
                      type="email"
                      placeholder="Email (e.g., john.doe@example.com)"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
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

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      name="phone_number"
                      value={formvalue.phone_number}
                      onChange={changeHandel}
                      type="tel"
                      placeholder="Phone Number (10 digits)" 
                      maxLength="10"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      name="date_of_birth"
                      value={formvalue.date_of_birth}
                      onChange={changeHandel}
                      type="date"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <select
                      name="gender"
                      value={formvalue.gender}
                      onChange={changeHandel}
                      className="form-control"
                      style={{appearance: 'auto'}}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <input
                      name="profile_picture"
                      value={formvalue.profile_picture}
                      onChange={changeHandel}
                      type="url"
                      placeholder="Profile Picture URL"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <input
                      name="emergency_contact"
                      value={formvalue.emergency_contact}
                      onChange={changeHandel}
                      type="tel"
                      placeholder="Emergency Contact (10 digits)" 
                      maxLength="10"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <textarea
                      name="address"
                      value={formvalue.address}
                      onChange={changeHandel}
                      placeholder="Your Address"
                      className="form-control"
                    ></textarea>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4">
                  Edit Profile
                </button>
                <div>
                  <Link to="/login">
                    <p>If already registered, click here to login.</p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Traveller_Edit;

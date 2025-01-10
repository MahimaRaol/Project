import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Aheader from '../common/Aheader';
import { Helmet } from 'react-helmet'

function Add_Package() {

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
        const res = await axios.get(`http://localhost:3000/travel-agent`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        trevel_agent_id: "",
        trevel_agent_name: "",
        package_name: "",
        destination: "",
        duration_days: "",
        price_per_person: "",
        start_date: "",
        end_date: "",
        description: "",
        inclusions: "",
        exclusions: "",
        available_seats: "",
        package_img: "",
        status: ""
      })
    
      const changeHandel = (e) => {
    
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
      }
    
    function validation() {
        let isValid = true;

        // Package Name Validation
        if (!formvalue.package_name.trim()) {
        isValid = false;
        toast.error("Package Name is required!");
        } else if (!/^[A-Za-z\s]+$/.test(formvalue.package_name)) {
        isValid = false;
        toast.error("Package Name should only contain alphabets!");
        }

        // Destination Name Validation
        if (!formvalue.destination.trim()) {
        isValid = false;
        toast.error("Destination is required!");
        } else if (!/^[A-Za-z\s]+$/.test(formvalue.destination)) {
        isValid = false;
        toast.error("Destination should only contain alphabets!");
        }
        
        // Price Per Person Validation
        if (!formvalue.price_per_person.trim()) {
            isValid = false;
            toast.error("Price Per Person is required!");
        }

        //Start Date Validation
        if (!formvalue.start_date.trim()) {
        isValid = false;
        toast.error("Start Date is required!");
        }

        //End Date Validation
        if (!formvalue.end_date.trim()) {
            isValid = false;
            toast.error("End Date is required!");
            }

        // Description Validation
        if (!formvalue.description.trim()) {
        isValid = false;
        toast.error("Description is required!");
        }


        // Available seats Validation
        if (!formvalue.available_seats.trim()) {
        isValid = false;
        toast.error("Available seats is required!");
        }

    // Package Picture URL Validation
        if (!formvalue.package_img.trim()) {
            isValid = false;
            toast.error("Package Picture URL is required!");
            } else if (
            !/^(https?:\/\/[^\s]+)$/.test(formvalue.package_img)
            ) {
            isValid = false;
            toast.error("Please provide a valid URL!");
            }

        return isValid;
    }

    const submitHandel = async (e) => {
  e.preventDefault();

  // Find the selected travel agent's name
  const selectedAgent = data.find(agent => agent.id === formvalue.trevel_agent_id);
  if (selectedAgent) {
    // Include the travel agent's name in the form data
    formvalue.trevel_agent_name = `${selectedAgent.first_name} ${selectedAgent.last_name}`;
  } else {
    formvalue.trevel_agent_name = ""; // Or handle as per your logic if no agent is selected
  }

  if (validation()) {
    try {
      const res = await axios.post(`http://localhost:3000/package`, formvalue);
      toast.success('Package Submitted Successfully');
      
      // Reset the form
      setFormvalue({
        trevel_agent_id: "",
        trevel_agent_name: "",
        package_name: "",
        destination: "",
        duration_days: "",
        price_per_person: "",
        start_date: "",
        end_date: "",
        description: "",
        inclusions: "",
        exclusions: "",
        available_seats: "",
        package_img: "",
        status: ""
      });
    } catch (err) {
      toast.error("Error submitting package. Please try again.");
    }
    return false;
  }
}

  return (
    <div>
        <Aheader/>

        <div className="container-fluid py-5">
            <div className="container py-5">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Package</h6>
                <h1>Add Package</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="contact-form bg-white" style={{padding: 30}}>
                    <div id="success" />
                    <form form className="form" method="post" action="" onSubmit={submitHandel}>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <select name="trevel_agent_id" value={formvalue.trevel_agent_id} onChange={changeHandel} className="form-control" style={{appearance: 'auto'}}>
                        <option value="">Select Travel-Agent</option>
                        {data &&
                            data.map((value, index) => (
                            <option key={index} value={value.id}>
                                {value.first_name} {value.last_name}
                            </option>
                            ))}
                        </select>
                        </div>
                        <div className="control-group col-sm-6">
                            <select name="status" value={formvalue.status} onChange={changeHandel} className="form-control" style={{appearance: 'auto'}}>
                                <option value="">Select Status</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.package_name} name="package_name" placeholder="Package Name" />
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.destination} name="destination" placeholder="Destination Name" />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input name="duration_days" value={formvalue.duration_days} onChange={changeHandel} type="number" placeholder="Duration of Days" className="form-control"/>
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.price_per_person} name="price_per_person" placeholder="Price per Persion" />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                            <div className="placeholder-container">
                                <span className="placeholder-text">Start Date</span>
                                <input type="date" className="form-control p-4" onChange={changeHandel} value={formvalue.start_date} name="start_date"/>
                            </div>
                            <p className="help-block text-danger" />
                        </div>

                        <div className="control-group col-sm-6">
                            <div className="placeholder-container">
                            <span className="placeholder-text">End Date</span>
                                <input type="date" className="form-control p-4" onChange={changeHandel} value={formvalue.end_date} name="end_date" />
                            </div>
                            <p className="help-block text-danger" />
                        </div>
                            </div>
                        </div>

                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input name="package_img" value={formvalue.package_img} onChange={changeHandel} type="url" placeholder="Package Picture URL" className="form-control"/>
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="number" className="form-control p-4" onChange={changeHandel} value={formvalue.available_seats} name="available_seats" placeholder="Available Seats" />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.inclusions} name="inclusions" placeholder="Inclusions" />
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.exclusions} name="exclusions" placeholder="Exclusion" />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="form-row">
                    <div className="control-group col-sm-12">
                        <textarea className="form-control p-4" onChange={changeHandel} value={formvalue.description} name="description" placeholder="Description" rows="5" cols="50"></textarea>
                        <p className="help-block text-danger" />
                    </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary py-3 px-4" type="submit">Add Package</button>
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

export default Add_Package
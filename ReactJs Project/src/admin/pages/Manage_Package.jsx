/* global $ */
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Aheader from '../common/Aheader';

function Manage_Package() {

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

    const [packages, setPackages] = useState([]);
    const [agents, setAgents] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            // Fetch packages
            const packageRes = await axios.get(`http://localhost:3000/package`);
            const agentRes = await axios.get(`http://localhost:3000/travel-agent`);

            const packagesData = packageRes.data;
            const agentsData = agentRes.data;

            // Map travel agent details to packages
            const mergedData = packagesData.map(pkg => {
                const agent = agentsData.find(agent => agent.id === pkg.trevel_agent_id);
                return {
                    ...pkg,
                    travel_agent_name: agent ? `${agent.first_name} ${agent.last_name}` : "Unknown",
                };
            });

            setPackages(mergedData);
            setAgents(agentsData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const deleteHandel=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/package/${id}`);
        toast.success("Delete Package Successfully");
        fetch();
    }
    const [formvalue, setFormvalue] = useState({
      id: "",
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

    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/package/${id}`);
        setFormvalue(res.data);
        $('#myModal').modal('show'); // Open modal when editing
    }

    
    
      const changeHandel = (e) => {
        setFormvalue({ ...formvalue,[e.target.name]: e.target.value });
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
    if (validation()) {
        await axios.put(`http://localhost:3000/package/${formvalue.id}`, formvalue);
        toast.success('Package Updated Successfully!');
        fetch();
        $('#myModal').modal('hide'); // Close modal on success
    }
    };

  return (
    <div>
        <Aheader/>
        <div>
            <section className="contact-us section">
            <div className="container">
            <div className="inner">
            <div className="row">

            <div className="col-lg-12">
            <div className="contact-us-form">
                <h2>Manage Packages</h2>
                <br />
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                        <tr>
                                <th>Package ID</th>
                                <th>Travel Agent Name</th>
                                <th>Package Name</th>
                                <th>Package Image</th>
                                <th>Destination</th>
                                <th>Duration Days</th>
                                <th>Price per person</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Description</th>
                                <th>Inclusion</th>
                                <th>Exclusions</th>
                                <th>Available Seats</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {packages.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.travel_agent_name}</td>
                                    <td>{value.package_name}</td>
                                    <td><img src={value.package_img} width="100px" height="80px" alt="Package" /></td>
                                    <td>{value.destination}</td>
                                    <td>{value.duration_days}</td>
                                    <td>{value.price_per_person}</td>
                                    <td>{value.start_date}</td>
                                    <td>{value.end_date}</td>
                                    <td>{value.description}</td>
                                    <td>{value.inclusions}</td>
                                    <td>{value.exclusions}</td>
                                    <td>{value.available_seats}</td>
                                    <td>
                                        <button className='btn btn-primary' onClick={() => editHandel(value.id)}>Edit</button>
                                        <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                        <button className='btn btn-Success'>{value.status}</button>
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
                                    <h4 className="modal-title">Edit Package</h4>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>
                                {/* Modal body */}
                                <div className="modal-body">
                                    <form onSubmit={submitHandel}>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Package Name
                                                    <input type="text" name="package_name" onChange={changeHandel} value={formvalue.package_name} placeholder="Package Name" className="form-control" />
                                                    </label>
                                                    </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                <label>Package Image
                                                    <input type="text" name="package_img" onChange={changeHandel} value={formvalue.package_img} placeholder="Package Image" className="form-control" />
                                                </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Destination
                                                    <input type="text" name="destination" onChange={changeHandel} value={formvalue.destination} placeholder="Destination" className="form-control" />
                                                    </label>
                                                    </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Duration Days
                                                    <input type="number" name="duration_days" onChange={changeHandel} value={formvalue.duration_days} placeholder="Duration Days" className="form-control" />
                                                    </label>
                                                    </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label>Price per Person
                                                    <input type="number" name="price_per_person" onChange={changeHandel} value={formvalue.price_per_person} placeholder="Price er Person" className="form-control" />
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
                                                    <label>Start Date
                                                    <input type="date" name="start_date" onChange={changeHandel} value={formvalue.start_date} placeholder="Start Date" className="form-control"/>
                                                    </label>
                                                    </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                <label>End Date
                                                    <input type="date" name="end_date" onChange={changeHandel} value={formvalue.end_date} placeholder="End Date" className="form-control" />
                                                </label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                <label>Description
                                                    <input type="text" name="description" onChange={changeHandel} value={formvalue.description} placeholder="Description" className="form-control" />
                                                </label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                <label>Inclusions
                                                    <input type="text" name="inclusions" onChange={changeHandel} value={formvalue.inclusions} placeholder="Inclusions" className="form-control"/>
                                                </label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                <label>Exclusions
                                                    <input type="text" name="exclusions" onChange={changeHandel} value={formvalue.exclusions} placeholder="Exclusions" className="form-control"/>
                                                </label>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                <label>Available Seats
                                                    <input type="number" name="available_seats" onChange={changeHandel} value={formvalue.available_seats} placeholder="Available Seats" className="form-control"/>
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

export default Manage_Package
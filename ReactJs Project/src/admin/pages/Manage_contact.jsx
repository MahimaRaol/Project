import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate } from 'react-router-dom'
import Aheader from '../common/Aheader';

function Manage_contact() {

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
    }, []);

    const [data, setData] = useState([]);
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/contact`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel=async(id)=>{
        const res=await axios.delete(`http://localhost:3000/contact/${id}`);
        console.log(res);
        toast.success("Delete Contact Successfully");
        fetch();
    }

  return (
    <div>
        <Aheader/>
        <div>
        <div>
            <section className="contact-us section">
            <div className="container">
                <div className="inner">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="contact-us-form">
                                <h2>View Contacts</h2>
                                <br />
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                        <tr>
                                                <th>Contact ID</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Subject</th>
                                                <th>Message</th>
                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((value,index,arr) => {
                                                    return (
                                                        <tr>
                                                            <td>{value.id}</td>
                                                            <td>{value.name}</td>
                                                            <td>{value.email}</td>
                                                            <td>{value.sub}</td>
                                                            <td>{value.msg}</td>
                                                            <td>
                                                                <button className='btn btn-danger' onClick={()=>deleteHandel(value.id)}>Delete</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
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
        {/* <!-- JavaScript Libraries --> */}
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="admin/lib/easing/easing.min.js"></script>
        <script src="admin/lib/owlcarousel/owl.carousel.min.js"></script>
        {/* <script src="admin/lib/tempusdominus/js/moment.min.js"></script>
        <script src="admin/lib/tempusdominus/js/moment-timezone.min.js"></script>
        <script src="admin/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script> */}

        {/* <!-- Contact Javascript File --> */}
        <script src="admin/mail/jqBootstrapValidation.min.js"></script>
        <script src="admin/mail/contact.js"></script>

        {/* <!-- Template Javascript --> */}
        {/* <script src="admin/js/main.js"></script> */}
    </Helmet>

    </div>
    </div>
  )
}

export default Manage_contact
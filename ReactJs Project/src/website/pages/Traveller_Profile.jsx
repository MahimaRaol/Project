import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Footer from '../common/Footer'
import axios from 'axios'
import Header from '../common/Header';

function Traveller_Profile() {
    const navigate = useNavigate();

    useEffect(() => {
        fetch();
    }, []);

    const [data, setData] = useState({});
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/traveller/${localStorage.getItem('travellerid')}`);
        console.log(res.data);
        setData(res.data);
    }

    const [formvalue, setFormvalue] = useState({
        id: "",
        first_name: "",
        email: "",
        mobile: "",
        profile_picture: "",
    })
    const editHandel = async (id) => {
        const res = await axios.get(`http://localhost:3000/traveller/${id}`);
        console.log(res);
        setFormvalue(res.data);
    }

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    function validation() {
        var result = true;
        if (formvalue.first_name == "") {
            result = false;
            toast.error('First Name Field is required !');
            return false;
        }
        if (formvalue.email == "") {
            result = false;
            toast.error('email Field is required !');
            return false;
        }
        if (formvalue.mobile == "") {
            result = false;
            toast.error('mobile Field is required !');
            return false;
        }
        if (formvalue.profile_picture == "") {
            result = false;
            toast.error('Profile Picture Field is required !');
            return false;
        }
        return result;
    }
    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.put(`http://localhost:3000/traveller/${formvalue.id}`, formvalue);
            toast.success('Traveller Updated Success !');
            fetch();
        }
    }

  return (
    <div>
        <div>
        <Header/>

        {/* Header Start */}
        <div className="container-fluid page-header">
            <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
                <h3 className="display-4 text-white text-uppercase">My Profile</h3>
                <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><NavLink className="text-white" to="/">Home</NavLink></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Profile</p>
                </div>
            </div>
            </div>
        </div>
        {/* Header End */}

        <div>

        {/* Start Portfolio Details Area */}
        <section className="vh-100" style={{backgroundColor: '#f4f5f7'}}>
        <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
                <div className="card mb-3" style={{borderRadius: '.5rem'}}>
                <div className="row g-0">
                    <div className="col-md-4 gradient-custom text-center text-white" style={{borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
                    <img src={data.profile_picture} alt="Avatar" className="img-fluid my-5" style={{width: 100}} />
                    <h4>Name</h4>
                    <h6>{data.first_name}  {data.last_name}</h6>
                    <hr />
                    <button className="date fa fa-edit p-2" onClick={()=> navigate('/traveller_edit/'+ data.id)}>Edit Profile</button>
                    <i className="far fa-edit mb-5" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body p-4">
                        <h6>ID</h6>
                        <p className="text-muted">{data.id}</p>
                        <hr className="mt-0 mb-4" />
                        <div className="row pt-1">
                        <div className="col-6 mb-3">
                            <h6>Email</h6>
                            <p className="text-muted">{data.email}</p>
                        </div>
                        <div className="col-6 mb-3">
                            <h6>Password</h6>
                            <p className="text-muted">{data.password}</p>
                        </div>
                        <div className="col-6 mb-3">
                            <h6>Phone</h6>
                            <p className="text-muted">{data.phone_number}</p>
                        </div>
                        <div className="col-6 mb-3">
                            <h6>DOB</h6>
                            <p className="text-muted">{data.date_of_birth}</p>
                        </div>
                        <div className="col-6 mb-3">
                            <h6>Gender</h6>
                            <p className="text-muted">{data.gender}</p>
                        </div>
                        <div className="col-6 mb-3">
                            <h6>Emergency Co.No.</h6>
                            <p className="text-muted">{data.emergency_contact}</p>
                        </div>
                        <div className="col-12 mb-3">
                            <h6>Address</h6>
                            <p className="text-muted">{data.address}</p>
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

            </div>

        {/* Back to Top */}
        <a href="" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up" /></a>

        </div>
       
        <Helmet>
            {/* <!-- JavaScript Libraries --> */}
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
            <script src="website/lib/easing/easing.min.js"></script>
            <script src="website/lib/owlcarousel/owl.carousel.min.js"></script>
            <script src="website/lib/tempusdominus/js/moment.min.js"></script>
            <script src="website/lib/tempusdominus/js/moment-timezone.min.js"></script>
            <script src="website/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

            {/* <!-- Contact Javascript File --> */}
            <script src="website/mail/jqBootstrapValidation.min.js"></script>
            <script src="website/mail/contact.js"></script>

            {/* <!-- Template Javascript --> */}
            <script src="website/js/main.js"></script>
        </Helmet>
        <Footer/>
    </div>
  )
}

export default Traveller_Profile
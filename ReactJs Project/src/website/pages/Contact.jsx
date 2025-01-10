import React, { useState, useEffect } from 'react';
import { NavLink} from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Footer from '../common/Footer'
import { toast } from 'react-toastify';
import axios from 'axios';
import Header from '../common/Header';

function Contact() {

    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        sub: "",
        msg: "",
      })
    
      const changeHandel = (e) => {
    
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
      }
    
      function validation() {
        var result = true;
        if (formvalue.name == "") {
          result = false;
          toast.error('Name Field is required !');
          return false;
        }
        if (formvalue.email == "") {
          result = false;
          toast.error('Email Field is required !');
          return false;
        }
        if (formvalue.sub == "") {
          result = false;
          toast.error('Subject Field is required !');
          return false;
        }
        if (formvalue.msg == "") {
          result = false;
          toast.error('Message Field is required !');
          return false;
        }
        return result;
      }
      const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
          const res = await axios.post(`http://localhost:3000/contact`, formvalue);
          toast.success('Inquiry Submitted Success !');
          setFormvalue({ ...formvalue, name: "", email: "", sub: "", msg: "" });
          return false;
        }
      }

  return (
    <div>
        <Header/>

        {/* Header Start */}
        <div className="container-fluid page-header">
            <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
                <h3 className="display-4 text-white text-uppercase">Contact</h3>
                <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><NavLink className="text-white" to="/">Home</NavLink></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Contact</p>
                </div>
            </div>
            </div>
        </div>
        {/* Header End */}

        {/* Booking Start */}
        <div className="container-fluid booking mt-5 pb-5">
            <div className="container pb-5">
            <div className="bg-light shadow" style={{padding: 30}}>
                <div className="row align-items-center" style={{minHeight: 60}}>
                <div className="col-md-10">
                    <div className="row">
                    <div className="col-md-3">
                        <div className="mb-3 mb-md-0">
                        <select className="custom-select px-4" style={{height: 47}}>
                            <option selected>Destination</option>
                            <option value={1}>Destination 1</option>
                            <option value={2}>Destination 1</option>
                            <option value={3}>Destination 1</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3 mb-md-0">
                        <div className="date" id="date1" data-target-input="nearest">
                            <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Depart Date" data-target="#date1" data-toggle="datetimepicker" />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3 mb-md-0">
                        <div className="date" id="date2" data-target-input="nearest">
                            <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Return Date" data-target="#date2" data-toggle="datetimepicker" />
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-3 mb-md-0">
                        <select className="custom-select px-4" style={{height: 47}}>
                            <option selected>Duration</option>
                            <option value={1}>Duration 1</option>
                            <option value={2}>Duration 1</option>
                            <option value={3}>Duration 1</option>
                        </select>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary btn-block" type="submit" style={{height: 47, marginTop: '-2px'}}>Submit</button>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Booking End */}

        {/* Contact Start */}
        <div className="container-fluid py-2">
            <div className="container py-2">
            <div className="text-center mb-2 pb-2">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Contact</h6>
                <h1>Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="contact-form bg-white" style={{padding: 30}}>
                    <div id="success" />
                    <form form className="form" method="post" action="" onSubmit={submitHandel}>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.name} name="name" placeholder="Your Name" />
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.email} name="email" placeholder="Your Email" />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="control-group">
                        <input type="text"  className="form-control p-4" onChange={changeHandel} value={formvalue.sub} name="sub" placeholder="Subject" />        
                        <p className="help-block text-danger" />
                    </div>
                    <div className="control-group">
                        <textarea name="msg" onChange={changeHandel} rows={5} className="form-control py-3 px-4" value={formvalue.msg} placeholder="Your Message" defaultValue={""} />
                        <p className="help-block text-danger" />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary py-3 px-4" type="submit">Send Message</button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Contact End */}

        <Footer/>

        {/* Back to Top */}
        <a href="" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up" /></a>
        
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

      
        </div>

  )
}

export default Contact
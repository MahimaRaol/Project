import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import Aheader from '../common/Aheader';


function Add_Destination() {

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

    const [formvalue, setFormvalue] = useState({
        id: "",
        destination_name: "",
        dest_img: ""
      })
    
      const changeHandel = (e) => {
    
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(formvalue);
      }
    
    function validation() {
        let isValid = true;

        // Destination Name Validation
        if (!formvalue.destination_name.trim()) {
        isValid = false;
        toast.error("Destination Name is required!");
        } else if (!/^[A-Za-z\s]+$/.test(formvalue.destination_name)) {
        isValid = false;
        toast.error("Destination Name should only contain alphabets!");
        }

        // Destination Picture URL Validation
        if (!formvalue.dest_img.trim()) {
            isValid = false;
            toast.error("Destination Picture URL is required!");
        } else if (
            !/^(https?:\/\/[^\s]+)$/.test(formvalue.dest_img)
        ) {
            isValid = false;
            toast.error("Please provide a valid URL!");
        }

        return isValid;
    }
      const submitHandel = async (e) => {
        e.preventDefault();
        if (validation()) {
          const res = await axios.post(`http://localhost:3000/destination`, formvalue);
          toast.success('Destination Submitted Successfully');
          setFormvalue({ ...formvalue, destination_name: "", dest_img: ""});
          return false;
        }
      }

  return (
    <div>
        <Aheader/>

        <div className="container-fluid py-5">
            <div className="container py-5">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Destination</h6>
                <h1>Add Destination</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="contact-form bg-white" style={{padding: 30}}>
                    <div id="success" />
                    <form form className="form" method="post" action="" onSubmit={submitHandel}>
                    <div className="form-row">
                        <div className="control-group col-sm-6">
                        <input type="text" className="form-control p-4" onChange={changeHandel} value={formvalue.destination_name} name="destination_name" placeholder="Destination Name" />
                        <p className="help-block text-danger" />
                        </div>
                        <div className="control-group col-sm-6">
                        <input type="url" className="form-control p-4" onChange={changeHandel} value={formvalue.dest_img} name="dest_img" placeholder="Destination Image URL" />
                        <p className="help-block text-danger" />
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary py-3 px-4" type="submit">Add Destination</button>
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

export default Add_Destination
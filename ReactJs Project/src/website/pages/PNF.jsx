import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Footer from '../common/Footer'
import { toast } from 'react-toastify';
import axios from 'axios';

function PNF() {
    const navigate = useNavigate();
        
    // States to store traveller's first name and last name
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Fetch traveller data from the API
    useEffect(() => {
        const travellerid = localStorage.getItem('travellerid');
        if (travellerid) {
            fetchTravellerData(travellerid);
        }
    }, []);

    const fetchTravellerData = async (travellerid) => {
        try {
            const response = await axios.get(`http://localhost:3000/traveller/${travellerid}`);
            setFirstName(response.data.first_name);
            setLastName(response.data.last_name);
        } catch (error) {
            console.error('Failed to fetch traveller data:', error);
            toast.error('Failed to load traveller information');
        }
    };

    const travellerlogout = () => {
        localStorage.removeItem('travellerid');
        localStorage.removeItem('first_name');
        localStorage.removeItem('last_name');
        setFirstName('');
        setLastName('');
        toast.success('Logout Success');
        navigate('/');
    };

  return (
    <div>
          <div>
      <div>

        {/* Header Start */}
        <div className="container-fluid page-header">
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
              <h3 className="display-4 text-white text-uppercase">PNF</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><NavLink className="text-white" to="/">Home</NavLink></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Page Not Found</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}

        

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
    </div>
    </div>
  )
}

export default PNF
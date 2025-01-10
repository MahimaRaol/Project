import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Footer from '../common/Footer'
import axios from 'axios';
import Header from '../common/Header';

function Destination() {

    useEffect(() => {
      fetch();
    })
  
    const [data, setData] = useState([]);
    const fetch = async () => {
      const res = await axios.get(`http://localhost:3000/destination`);
      console.log(res.data);
      setData(res.data);
    }

  return (
    <div>
      <Header/>

      {/* Header Start */}
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
            <h3 className="display-4 text-white text-uppercase">Destination</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><NavLink className="text-white" to="/">Home</NavLink></p>
              <i className="fa fa-angle-double-right pt-1 px-3" />
              <p className="m-0 text-uppercase">Destination</p>
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
                            <option value={2}>Destination 2</option>
                            <option value={3}>Destination 3</option>
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
                            <option value={2}>Duration 2</option>
                            <option value={3}>Duration 3</option>
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

        {/* Destination Start */}
            <div className="container pt-3 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Destination</h6>
                <h1>Explore Top Destination</h1>
            </div>

            <div className="row">
            {data && data.map((value, index) => (
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src={value.dest_img} alt />
                    <a className="destination-overlay text-white text-decoration-none" href>
                    <h5 className="text-white">{value.destination_name}</h5>
                    </a>
                </div>
                </div>
             ))}
            </div>

            </div>
        {/* Destination End */}

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

export default Destination
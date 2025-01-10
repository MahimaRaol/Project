import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Footer from '../common/Footer'
import Header from '../common/Header';

function Testimonial() {

  return (
    <div>
      <Header/>

      {/* Header Start */}
      <div className="container-fluid page-header">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
            <h3 className="display-4 text-white text-uppercase">Testimonial</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase"><NavLink className="text-white" to="/">Home</NavLink></p>
              <i className="fa fa-angle-double-right pt-1 px-3" />
              <p className="m-0 text-uppercase">Testimonial</p>
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

      {/* Testimonial Start */}
          <div className="container py-2">
          <div className="text-center mb-4 pb-4">
              <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Testimonial</h6>
              <h1>What Say Our Clients</h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
              <div className="text-center pb-4">
              <img className="img-fluid mx-auto" src="website/img/testimonial-1.jpg" style={{width: 100, height: 100}} />
              <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
              </div>
              </div>
              <div className="text-center">
              <img className="img-fluid mx-auto" src="website/img/testimonial-2.jpg" style={{width: 100, height: 100}} />
              <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
              </div>
              </div>
              <div className="text-center">
              <img className="img-fluid mx-auto" src="website/img/testimonial-3.jpg" style={{width: 100, height: 100}} />
              <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
              </div>
              </div>
              <div className="text-center">
              <img className="img-fluid mx-auto" src="website/img/testimonial-4.jpg" style={{width: 100, height: 100}} />
              <div className="testimonial-text bg-white p-4 mt-n5">
                  <p className="mt-5">Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                  </p>
                  <h5 className="text-truncate">Client Name</h5>
                  <span>Profession</span>
              </div>
              </div>
          </div>
          </div>
      {/* Testimonial End */}

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

export default Testimonial
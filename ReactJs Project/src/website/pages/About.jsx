import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet'
import Footer from '../common/Footer'
import Header from '../common/Header';

function About() {

  return (
    <div>
      <div>
      <Header/>

        {/* Header Start */}
        <div className="container-fluid page-header">
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
              <h3 className="display-4 text-white text-uppercase">About</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><NavLink className="text-white" to="/">Home</NavLink></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">About</p>
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

        {/* About Start */}
        <div className="container-fluid py-2">
          <div className="container pt-2">
            <div className="row">
              <div className="col-lg-6" style={{minHeight: 500}}>
                <div className="position-relative h-100">
                  <img className="position-absolute w-100 h-100" src="website/img/about.jpg" style={{objectFit: 'cover'}} />
                </div>
              </div>
              <div className="col-lg-6 pt-5 pb-lg-5">
                <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                  <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>About Us</h6>
                  <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                  <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                  <div className="row mb-4">
                    <div className="col-6">
                      <img className="img-fluid" src="website/img/about-1.jpg" alt />
                    </div>
                    <div className="col-6">
                      <img className="img-fluid" src="website/img/about-2.jpg" alt />
                    </div>
                  </div>
                  <a href className="btn btn-primary mt-1">Book Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Feature Start */}
        <div className="container-fluid pb-2">
          <div className="container pb-2">
            <div className="row">
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
                    <i className="fa fa-2x fa-money-check-alt text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className>Competitive Pricing</h5>
                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
                    <i className="fa fa-2x fa-award text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className>Best Services</h5>
                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex mb-4 mb-lg-0">
                  <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-primary mr-3" style={{height: 100, width: 100}}>
                    <i className="fa fa-2x fa-globe text-white" />
                  </div>
                  <div className="d-flex flex-column">
                    <h5 className>Worldwide Coverage</h5>
                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}

        {/* Registration Start */}
        <div className="container-fluid bg-registration py-2" style={{margin: '90px 0'}}>
          <div className="container py-2">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="mb-4">
                  <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Mega Offer</h6>
                  <h1 className="text-white"><span className="text-primary">30% OFF</span> For Subscriber</h1>
                </div>
                <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                  ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                  dolor</p>
                <ul className="list-inline text-white m-0">
                  <li className="py-2"><i className="fa fa-check text-primary mr-3" />Labore eos amet dolor amet diam</li>
                  <li className="py-2"><i className="fa fa-check text-primary mr-3" />Etsea et sit dolor amet ipsum</li>
                  <li className="py-2"><i className="fa fa-check text-primary mr-3" />Diam dolor diam elitripsum vero.</li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className="card border-0">
                  <div className="card-header bg-primary text-center p-4">
                    <h1 className="text-white m-0">Sign Up Now</h1>
                  </div>
                  <div className="card-body rounded-bottom bg-white p-5">
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control p-4" placeholder="Your name" required="required" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control p-4" placeholder="Your email" required="required" />
                      </div>
                      <div className="form-group">
                        <select className="custom-select px-4" style={{height: 47}}>
                          <option selected>Select a destination</option>
                          <option value={1}>destination 1</option>
                          <option value={2}>destination 2</option>
                          <option value={3}>destination 3</option>
                        </select>
                      </div>
                      <div>
                        <button className="btn btn-primary btn-block py-3" type="submit">Sign Up Now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Registration End */}

        {/* Team Start */}
        <div className="container-fluid py-2">
          <div className="container pt-2 pb-2">
            <div className="text-center mb-3 pb-3">
              <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Guides</h6>
              <h1>Our Travel Guides</h1>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="website/img/team-1.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-instagram" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="website/img/team-2.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-instagram" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="website/img/team-3.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-instagram" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="team-item bg-white mb-4">
                  <div className="team-img position-relative overflow-hidden">
                    <img className="img-fluid w-100" src="website/img/team-4.jpg" alt />
                    <div className="team-social">
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-twitter" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-instagram" /></a>
                      <a className="btn btn-outline-primary btn-square" href><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h5 className="text-truncate">Guide Name</h5>
                    <p className="m-0">Designation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}

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

export default About
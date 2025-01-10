import React from 'react'
import Aheader from '../common/Aheader'
import Afooter from '../common/Afooter'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Dashboard() {
  return (
    <div>
        <div id="wrapper">
           <Aheader/>

        {/* Header Start */}
        <div className="container-fluid page-header">
          <div className="container">
            <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight: 400}}>
              <h3 className="display-4 text-white">Admin Panel</h3>
              <div className="d-inline-flex text-white">
                <p className="m-0 text-uppercase"><NavLink className="text-white" to="/">Home</NavLink></p>
                <i className="fa fa-angle-double-right pt-1 px-3" />
                <p className="m-0 text-uppercase">Admin Panel</p>
              </div>
            </div>
          </div>
        </div>
        {/* Header End */}

        <div className="container-fluid py-5">
          <div className="container pt-5">
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

        <div className="container-fluid pb-5">
          <div className="container pb-5">
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

        <Afooter/>

        <Helmet>
           <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
           <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
           <script src="admin/lib/easing/easing.min.js"></script>
           <script src="admin/lib/owlcarousel/owl.carousel.min.js"></script>
           <script src="admin/mail/jqBootstrapValidation.min.js"></script>
           <script src="admin/mail/contact.js"></script>
        </Helmet>

        </div>
    </div>
  )
}

export default Dashboard
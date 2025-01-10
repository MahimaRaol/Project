import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { NavLink, useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Header/>

      {/* <!-- Carousel Start --> */}
        <div className="container-fluid p-0">
        <div
            id="header-carousel"
            className="carousel slide carousel-fade"
            data-ride="carousel"
        >
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img
                className="w-100"
                src="website/img/carousel-1.jpg"
                alt="Image"
                loading="lazy"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4 className="text-white text-uppercase mb-md-3">Tours &amp; Travels</h4>
                    <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <img
                className="w-100"
                src="website/img/carousel-2.jpg"
                alt="Image"
                loading="lazy"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 900 }}>
                    <h4 className="text-white text-uppercase mb-md-3">Tours &amp; Travels</h4>
                    <h1 className="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                </div>
                </div>
            </div>
            </div>

            <div>
            <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                <span className="carousel-control-prev-icon mb-n2" />
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
                <span className="carousel-control-next-icon mb-n2" />
                </div>
            </a>
            </div>
        </div>
        </div>
    {/* <!-- Carousel End --> */}

        {/* <!-- Booking Start --> */}
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
        {/* <!-- Booking End --> */}
        

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
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* About End */}

        {/* Feature Start */}
        <div className="container-fluid pb-3">
            <div className="container pb-3">
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

       
        {/* Destination Start */}
        <div className="container-fluid py-5">
            <div className="container pt-3 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Destination</h6>
                <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src="website/img/destination-1.jpg" alt />
                    <a className="destination-overlay text-white text-decoration-none" href>
                    <h5 className="text-white">United States</h5>
                    <span>100 Cities</span>
                    </a>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src="website/img/destination-2.jpg" alt />
                    <a className="destination-overlay text-white text-decoration-none" href>
                    <h5 className="text-white">United Kingdom</h5>
                    <span>100 Cities</span>
                    </a>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src="website/img/destination-3.jpg" alt />
                    <a className="destination-overlay text-white text-decoration-none" href>
                    <h5 className="text-white">Australia</h5>
                    <span>100 Cities</span>
                    </a>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src="website/img/destination-4.jpg" alt />
                    <a className="destination-overlay text-white text-decoration-none" href>
                    <h5 className="text-white">India</h5>
                    <span>100 Cities</span>
                    </a>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src="website/img/destination-5.jpg" alt />
                    <a className="destination-overlay text-white text-decoration-none" href>
                    <h5 className="text-white">South Africa</h5>
                    <span>100 Cities</span>
                    </a>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="destination-item position-relative overflow-hidden mb-2">
                    <img className="img-fluid" src="website/img/destination-6.jpg" alt />
                    <a className="destination-overlay text-white text-decoration-none" href>
                    <h5 className="text-white">Indonesia</h5>
                    <span>100 Cities</span>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Destination Start */}
        
        {/* Service Start */}
        <div className="container-fluid py-2">
            <div className="container pt-2 pb-2">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Services</h6>
                <h1>Tours &amp; Travel Services</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                    <i className="fa fa-2x fa-route mx-auto mb-4" />
                    <h5 className="mb-2">Travel Guide</h5>
                    <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                    <i className="fa fa-2x fa-ticket-alt mx-auto mb-4" />
                    <h5 className="mb-2">Ticket Booking</h5>
                    <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="service-item bg-white text-center mb-2 py-5 px-4">
                    <i className="fa fa-2x fa-hotel mx-auto mb-4" />
                    <h5 className="mb-2">Hotel Booking</h5>
                    <p className="m-0">Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem est amet labore</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Service End */}

        {/* Packages Start */}
        <div className="container-fluid py-2">
            <div className="container pt-3 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Packages</h6>
                <h1>Pefect Tour Packages</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                    <img className="img-fluid" src="website/img/package-1.jpg" alt />
                    <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Thailand</small>
                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />3 days</small>
                        <small className="m-0"><i className="fa fa-user text-primary mr-2" />2 Person</small>
                    </div>
                    <a className="h5 text-decoration-none" href>Discover amazing places of the world with us</a>
                    <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$350</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                    <img className="img-fluid" src="website/img/package-4.jpg" alt />
                    <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Thailand</small>
                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />3 days</small>
                        <small className="m-0"><i className="fa fa-user text-primary mr-2" />2 Person</small>
                    </div>
                    <a className="h5 text-decoration-none" href>Discover amazing places of the world with us</a>
                    <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$350</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                    <img className="img-fluid" src="website/img/package-1.jpg" alt />
                    <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Thailand</small>
                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />3 days</small>
                        <small className="m-0"><i className="fa fa-user text-primary mr-2" />2 Person</small>
                    </div>
                    <a className="h5 text-decoration-none" href>Discover amazing places of the world with us</a>
                    <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$350</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                    <img className="img-fluid" src="website/img/package-4.jpg" alt />
                    <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Thailand</small>
                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />3 days</small>
                        <small className="m-0"><i className="fa fa-user text-primary mr-2" />2 Person</small>
                    </div>
                    <a className="h5 text-decoration-none" href>Discover amazing places of the world with us</a>
                    <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$350</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                    <img className="img-fluid" src="website/img/package-1.jpg" alt />
                    <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Thailand</small>
                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />3 days</small>
                        <small className="m-0"><i className="fa fa-user text-primary mr-2" />2 Person</small>
                    </div>
                    <a className="h5 text-decoration-none" href>Discover amazing places of the world with us</a>
                    <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$350</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                <div className="package-item bg-white mb-2">
                    <img className="img-fluid" src="website/img/package-4.jpg" alt />
                    <div className="p-4">
                    <div className="d-flex justify-content-between mb-3">
                        <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2" />Thailand</small>
                        <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2" />3 days</small>
                        <small className="m-0"><i className="fa fa-user text-primary mr-2" />2 Person</small>
                    </div>
                    <a className="h5 text-decoration-none" href>Discover amazing places of the world with us</a>
                    <div className="border-top mt-4 pt-4">
                        <div className="d-flex justify-content-between">
                        <h6 className="m-0"><i className="fa fa-star text-primary mr-2" />4.5 <small>(250)</small></h6>
                        <h5 className="m-0">$350</h5>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Packages End */}

        {/* Registration Start */}
        <div className="container-fluid bg-registration py-3" style={{margin: '90px 0'}}>
            <div className="container py-5">
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
                        <NavLink to="/signup" className="btn btn-primary btn-block py-3">Sign Up Now
                        </NavLink>
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
        <div className="container-fluid py-3">
            <div className="container pt-3 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: 5}}>Guides</h6>
                <h1>Our Travel Guides</h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
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
                <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
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
                <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
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
                <div className="col-lg-3 col-md-4 col-sm-6 pb-2">
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
        </div>

  )
}

export default Home
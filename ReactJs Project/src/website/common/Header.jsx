import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

function Header() {

    const navigate = useNavigate();

    const [activeLink, setActiveLink] = useState('');

    // Handle when any NavLink is clicked, including dropdown items
    const handleNavLinkClick = (link) => {
      setActiveLink(link);  // Set active link based on clicked link
    };

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

        {/* <!-- Topbar Start --> */}
        <div>
        <div className="container-fluid bg-light pt-3 d-none d-lg-block">
            <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                    <p className="text-body px-3">|</p>
                    <p><i className="fa fa-phone-alt mr-2" />+012 345 6789</p>
                    <p className="text-body px-3">|</p>
                                {firstName && lastName && (
                                    <p>
                                        <i className="fa fa-user" /> Hi, {firstName} {lastName}
                                    </p>
                                )}
                </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <NavLink className="text-primary px-3" to>
                    <i className="fab fa-facebook-f" />
                    </NavLink>
                    <NavLink className="text-primary px-3" to>
                    <i className="fab fa-twitter" />
                    </NavLink>
                    <NavLink className="text-primary px-3" to>
                    <i className="fab fa-linkedin-in" />
                    </NavLink>
                    <NavLink className="text-primary px-3" to>
                    <i className="fab fa-instagram" />
                    </NavLink>
                    <NavLink className="text-primary pl-3" to>
                    <i className="fab fa-youtube" />
                    </NavLink>
                    
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* <!-- Topbar End --> */}


        {/* <!-- Navbar Start --> */}
<div className="container-fluid position-relative nav-bar p-0">
      <div className="container-lg position-relative p-0 px-lg-3" style={{ zIndex: 9 }}>
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
          <NavLink to="/" className="navbar-brand">
            <h1 className="m-0 text-primary">
              <span className="text-dark">Glob</span> Trekker
            </h1>
          </NavLink>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
            <div className="navbar-nav ml-auto py-0">
              <NavLink
                to="/"
                className={`nav-item nav-link ${activeLink === '/' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/')}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={`nav-item nav-link ${activeLink === '/about' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/about')}
              >
                About
              </NavLink>
              <NavLink
                to="/package"
                className={`nav-item nav-link ${activeLink === '/package' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/package')}
              >
                Packages
              </NavLink>

              {/* Pages Dropdown */}
              <div className="nav-item dropdown">
                <NavLink
                  to="#"
                  className={`nav-link dropdown-toggle ${activeLink === 'pages' ? 'active' : ''}`}
                  data-toggle="dropdown"
                  onClick={() => handleNavLinkClick('pages')}
                >
                  Pages
                </NavLink>
                <div className="dropdown-menu border-0 rounded-0 m-0" id="pagesDropdown">
                  <NavLink
                    to="/destination"
                    className={`dropdown-item ${activeLink === '/destination' ? 'active' : ''}`}
                    onClick={() => handleNavLinkClick('/destination')}
                  >
                    Destination
                  </NavLink>
                  <NavLink
                    to="/testimonial"
                    className={`dropdown-item ${activeLink === '/testimonial' ? 'active' : ''}`}
                    onClick={() => handleNavLinkClick('/testimonial')}
                  >
                    Testimonial
                  </NavLink>
                </div>
              </div>

              <NavLink
                to="/contact"
                className={`nav-item nav-link ${activeLink === '/contact' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('/contact')}
              >
                Contact
              </NavLink>

{/* Profile Dropdown */}
{(() => {
            if (localStorage.getItem('travellerid')) {
              return (
                <>
                  <div className="nav-item dropdown">
                    <NavLink
                      to="#"
                      className={`nav-link dropdown-toggle ${activeLink === 'profile' ? 'active' : ''}`}
                      data-toggle="dropdown"
                      onClick={() => handleNavLinkClick('profile')}
                    >
                      Profile
                    </NavLink>
                    <div className="dropdown-menu border-0 rounded-0 m-0" id="profileDropdown">
                      <NavLink
                        to="/traveller_profile"
                        className={`dropdown-item ${activeLink === '/traveller_profile' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('/traveller_profile')}
                      >
                        My Profile
                      </NavLink>
                      <NavLink
                        to="/view_booked_tour"
                        className={`dropdown-item ${activeLink === '/view_booked_tour' ? 'active' : ''}`}
                        onClick={() => handleNavLinkClick('/view_booked_tour')}
                      >View Bookings</NavLink>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary btn-block"
                    type="button"
                    style={{ height: 40, marginTop: '22px' }}
                    onClick={travellerlogout} // Call the logout function here
                  >
                    Logout
                  </button>
                </>
              );
            } else {
              return (
                <NavLink
                  to="/login"
                  className={`btn btn-primary btn-block ${activeLink === '/login' ? 'active' : ''}`}
                  type="submit"
                  style={{ height: 40, marginTop: '22px' }}
                  onClick={() => handleNavLinkClick('/login')}
                >
                  Login
                </NavLink>
              );
            }
          })()}

              <p className="text-body px-2"></p>
              <NavLink
                to="/signup"
                className={`btn btn-primary btn-block ${activeLink === '/signup' ? 'active' : ''}`}
                type="submit"
                style={{ height: 40, marginTop: '22px' }}
                onClick={() => handleNavLinkClick('/signup')}
              >
                SignUp
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
        {/* <!-- Navbar End --> */}



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
  )
}

export default Header
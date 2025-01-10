import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify';
import Afooter from './Afooter';

function Aheader() {

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
        console.log("Admin logged out");
    }

    const [dropdownActive, setDropdownActive] = useState("");
    const location = useLocation(); // Get the current path

    const handleDropdown = (menu) => {
      setDropdownActive((prev) => (prev === menu ? "" : menu));
    };

    
    return (
        <div>
        <Helmet>
            
        </Helmet>

        {/* <!-- Topbar Start --> */}
        <div>
        <div className="container-fluid bg-light pt-3 d-none d-lg-block">
            <div className="container">
            <div className="row">
                <div className="col-lg-8 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <p><i className="mr-2" />Admin Dashboard</p>
                    <p className="text-body px-3">|</p>
                    <p><i className="fa fa-envelope mr-2" />info@example.com</p>
                    <p className="text-body px-3">|</p>
                    <p><i className="fa fa-phone-alt mr-2" />+012 345 6789</p>
                    <p className="text-body px-3">|</p>
                    <p>{
                        (
                            () => {
                                if (localStorage.getItem('adminid')) {
                                    return (<li><i className="fa fa-user" />Hi.. {localStorage.getItem('adminname')}</li>)
                                }
                            }
                        )()
                    }</p>
                </div>
                </div>
                <div className="col-lg-4 text-center text-lg-right">
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
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: 9 }}
        >
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
                {/* Dashboard Link */}
                <NavLink to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                  }
                  onClick={() => setDropdownActive("")} // Close all dropdowns
                > Dashboard
                </NavLink>

                {/* Travellers Dropdown */}
                <div
                  className={`nav-item dropdown ${
                    dropdownActive === "travellers" ? "show" : ""
                  }`}
                >
                  <button
                    className={`nav-link dropdown-toggle btn btn-link ${
                      location.pathname.startsWith("/traveller")
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleDropdown("travellers")}
                  >Travellers
                  </button>
                  <div
                    className={`dropdown-menu ${
                      dropdownActive === "travellers" ? "d-block" : "d-none"
                    }`}
                  >
                    <NavLink
                      to="/traveller"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    >
                      Manage Travellers
                    </NavLink>
                    <NavLink
                      to="/manage_booked_tour"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    >
                      Manage Booked Tour
                    </NavLink>
                  </div>
                </div>

                {/* Travel-Agents Dropdown */}
                <div
                  className={`nav-item dropdown ${
                    dropdownActive === "travel-agents" ? "show" : ""
                  }`}
                >
                  <button
                    className={`nav-link dropdown-toggle btn btn-link ${
                      location.pathname.startsWith("/add_travel_agents") ||
                      location.pathname.startsWith("/manage_travel_agents") ||
                      location.pathname.startsWith("/add_package") ||
                      location.pathname.startsWith("/manage_package") ||
                      location.pathname.startsWith("/add_destination") ||
                      location.pathname.startsWith("/manage_destination") ||
                      location.pathname.startsWith("/view_booking")
                        ? "active"
                        : ""
                    }`}
                    onClick={() => handleDropdown("travel-agents")}
                  >
                    Travel-Agents
                  </button>
                  <div
                    className={`dropdown-menu ${
                      dropdownActive === "travel-agents" ? "d-block" : "d-none"
                    }`}
                  >
                    <NavLink
                      to="/add_travel_agents"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    >
                      Add Travel-Agents
                    </NavLink>

                    <NavLink
                      to="/manage_travel_agents"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    > Manage Travel-Agents
                    </NavLink>

                    <NavLink
                      to="/add_package"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    >Add Packages
                    </NavLink>

                    <NavLink
                      to="/manage_package"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    >Manage Packages
                    </NavLink>

                    <NavLink
                      to="/add_destination"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    >Add Destination
                    </NavLink>

                    <NavLink
                      to="/manage_destination"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    >Manage Destination
                    </NavLink>

                    <NavLink
                      to="/view_bookings"
                      className={({ isActive }) =>
                        isActive ? "dropdown-item active" : "dropdown-item"
                      }
                      onClick={() => setDropdownActive("")} // Close dropdown
                    >View Bookings
                    </NavLink>

                  </div>
                </div>

                {/* Profile Dropdown */}
                <div
                  className={`nav-item dropdown ${
                    dropdownActive === "profile" ? "show" : ""
                  }`}
                >
                  <button
                    className="nav-link dropdown-toggle btn btn-link"
                    onClick={() => handleDropdown("profile")}
                  >
                    Profile
                  </button>
                  <div
                    className={`dropdown-menu ${
                      dropdownActive === "profile" ? "d-block" : "d-none"
                    }`}
                  >
                    <button className="dropdown-item" onClick={adminlogout}>Logout</button>
                  </div>
                </div>

                {/* Contact Link */}
                <NavLink
                  to="/manage_contact"
                  className={({ isActive }) =>
                    isActive ? "nav-item nav-link active" : "nav-item nav-link"
                  }
                  onClick={() => setDropdownActive("")} // Close all dropdowns
                >
                  Contact
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
            <script src="admin/lib/easing/easing.min.js"></script>
            <script src="admin/lib/owlcarousel/owl.carousel.min.js"></script>
            {/* <script src="admin/lib/tempusdominus/js/moment.min.js"></script>
            <script src="admin/lib/tempusdominus/js/moment-timezone.min.js"></script>
            <script src="admin/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script> */}

            {/* <!-- Contact Javascript File --> */}
            <script src="admin/mail/jqBootstrapValidation.min.js"></script>
            <script src="admin/mail/contact.js"></script>

            {/* <!-- Template Javascript --> */}
            {/* <script src="admin/js/main.js"></script> */}
        </Helmet>
    </div>
    )
}

export default Aheader
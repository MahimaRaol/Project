import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { NavLink } from "react-router-dom";

function Packages() {
  const [packages, setPackages] = useState([]); // Store package data
  const [traveller, setTraveller] = useState(null); // Store traveller data
  const [travelAgents, setTravelAgents] = useState([]); // Store travel agents data
  const [bookedPackages, setBookedPackages] = useState([]); // Store booked package IDs

  // Fetch traveller data from localStorage and API
  const fetchTravellerData = async () => {
    const travellerId = localStorage.getItem("travellerid");

    if (!travellerId) {
      toast.error("Please log in first!");
      return;
    }

    try {
      const response = await axios.get("http://localhost:3000/traveller");
      const loggedInTraveller = response.data.find(
        (traveller) => traveller.id === travellerId
      );

      if (loggedInTraveller) {
        setTraveller(loggedInTraveller);
      } else {
        toast.error("Traveller not found.");
      }
    } catch (error) {
      console.error("Error fetching traveller data:", error);
      toast.error("Error fetching traveller data.");
    }
  };

  // Fetch travel agent data from API
  const fetchTravelAgentData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/travel-agent");
      setTravelAgents(response.data);
    } catch (error) {
      console.error("Error fetching travel agent data:", error);
      toast.error("Error fetching travel agent data.");
    }
  };

  // Fetch package data from API
  const fetchPackageData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/package");
      setPackages(response.data);
    } catch (error) {
      console.error("Error fetching package data:", error);
      toast.error("Error fetching package data.");
    }
  };

  // Fetch booking data and filter by traveller ID
  const fetchBookingData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/booking");
      const filteredBookings = response.data.filter(
        (booking) => booking.traveller_id === traveller.id
      );
      const bookedPackageIds = filteredBookings.map((booking) => booking.package_id);
      setBookedPackages(bookedPackageIds);
      // Save booked packages to localStorage
      localStorage.setItem("bookedPackages", JSON.stringify(bookedPackageIds));
    } catch (error) {
      console.error("Error fetching booking data:", error);
      toast.error("Error fetching booking data.");
    }
  };

  useEffect(() => {
    fetchTravellerData();
    fetchTravelAgentData();
    fetchPackageData();
  }, []);

  useEffect(() => {
    if (traveller) {
      fetchBookingData();
    }
  }, [traveller]);

  // Find travel agent name by travel agent ID
  const getTravelAgentName = (agentId) => {
    const agent = travelAgents.find((agent) => agent.id === agentId);
    return agent ? agent.first_name + " " + agent.last_name : "Unknown";
  };

  // Handle booking process
  const handleBooking = async (packageDetails) => {
    if (!traveller) {
      toast.error("Please log in first!");
      return;
    }
  
    // Check if the package is already booked
    if (bookedPackages.includes(packageDetails.id)) {
      toast.info("You have already booked this package.");
      return;
    }
  
    const travelAgentName = getTravelAgentName(packageDetails.trevel_agent_id);
  
    const bookingData = {
      traveller_id: traveller.id,
      traveller_name: `${traveller.first_name} ${traveller.last_name}`,
      travel_agent_id: packageDetails.trevel_agent_id,
      travel_agent_name: travelAgentName, // Dynamic travel agent name
      package_id: packageDetails.id,
      package_name: packageDetails.package_name,
      package_img: packageDetails.package_img, // Include the package image
      travel_date_start: packageDetails.start_date,
      travel_date_end: packageDetails.end_date,
      total_price: packageDetails.price_per_person,
      payment_status: "Pending",
      booking_status: "Confirmed", // Set booking status to confirmed
      number_of_travelers: 1,
      inclusions: packageDetails.inclusions,
    };
  
    try {
      // Send booking data to db.json or API
      await axios.post("http://localhost:3000/booking", bookingData);
      toast.success("Booking confirmed!");
  
      // Update booked packages in state and localStorage
      const updatedBookedPackages = [...bookedPackages, packageDetails.id];
      setBookedPackages(updatedBookedPackages);
      localStorage.setItem("bookedPackages", JSON.stringify(updatedBookedPackages));
    } catch (error) {
      console.error("Error during booking:", error);
      toast.error("Error during booking.");
    }
  };

  return (
    <div>
      <Header />
      {/* Header Section */}
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 400 }}
          >
            <h3 className="display-4 text-white text-uppercase">Packages</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <NavLink className="text-white" to="/">
                  Home
                </NavLink>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3" />
              <p className="m-0 text-uppercase">Packages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="container pt-5 pb-5">
        <div className="text-center mb-3 pb-3">
          <h6
            className="text-primary text-uppercase"
            style={{ letterSpacing: 5 }}
          >
            Packages
          </h6>
          <h1>Perfect Tour Packages</h1>
        </div>
        <div className="row">
          {packages.map((packageDetails) => (
            <div className="col-lg-4 col-md-6 mb-4" key={packageDetails.id}>
              <div className="package-item bg-white mb-2">
                <img
                  src={packageDetails.package_img}
                  alt={packageDetails.package_name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="p-4">
                  <div className="d-flex justify-content-between mb-3">
                    <small>
                      <i className="fa fa-map-marker-alt text-primary mr-2" />
                      {packageDetails.destination}
                    </small>
                    <small>
                      <i className="fa fa-calendar-alt text-primary mr-2" />
                      {packageDetails.duration_days} days
                    </small>
                    <small>
                      <i className="fa fa-user text-primary mr-2" />
                      {packageDetails.available_seats} seats
                    </small>
                  </div>
                  <h5 className="text-decoration-none">
                    {packageDetails.package_name}
                  </h5>
                  <p>{packageDetails.description}</p>
                  <div className="border-top mt-4 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6>
                        Inclusions: <small>{packageDetails.inclusions}</small>
                      </h6>
                      <h5>{packageDetails.price_per_person} Rs</h5>
                      {bookedPackages.includes(packageDetails.id) ? (
                        <button className="btn btn-success" disabled>
                          Already Booked
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => handleBooking(packageDetails)}
                        >
                          Book Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Packages;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const BookingPackage = () => {
  const [traveller, setTraveller] = useState(null);
  const [packageData, setPackageData] = useState(null);
  const [travelAgent, setTravelAgent] = useState(null);
  const [bookingData, setBookingData] = useState({
    number_of_travelers: 1,
    special_requests: '',
  });

  // Fetch traveller data from the API (Replace with actual traveller id)
  useEffect(() => {
    const travellerId = "1734264866705"; // Example traveller id
    fetchTravellerData(travellerId);
  }, []);

  const fetchTravellerData = async (travellerId) => {
    try {
      const response = await axios.get(`http://localhost:3000/traveller/${travellerId}`);
      setTraveller(response.data);
    } catch (error) {
      toast.error("Failed to fetch traveller data.");
    }
  };

  // Fetch package data from the API (Replace with actual package id)
  useEffect(() => {
    const packageId = "1735887215549"; // Example package id
    fetchPackageData(packageId);
  }, []);

  const fetchPackageData = async (packageId) => {
    try {
      const response = await axios.get(`http://localhost:3000/package/${packageId}`);
      setPackageData(response.data);
    } catch (error) {
      toast.error("Failed to fetch package data.");
    }
  };

  // Fetch travel agent data (Replace with actual agent id)
  useEffect(() => {
    const agentId = "1735884674005"; // Example agent id
    fetchTravelAgentData(agentId);
  }, []);

  const fetchTravelAgentData = async (agentId) => {
    try {
      const response = await axios.get(`http://localhost:3000/travel-agent/${agentId}`);
      setTravelAgent(response.data);
    } catch (error) {
      toast.error("Failed to fetch travel agent data.");
    }
  };

  // Handle input changes for the booking form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  // Handle booking submission
  const handleBooking = async () => {
    if (!traveller || !packageData || !travelAgent) {
      toast.error('Please wait while data is being loaded.');
      return;
    }

    const newBooking = {
      traveller_id: traveller.id,
      package_id: packageData.id,
      agent_id: travelAgent.id,
      package_name: packageData.package_name,
      travel_date_start: packageData.start_date,
      travel_date_end: packageData.end_date,
      total_price: packageData.price_per_person * bookingData.number_of_travelers,
      payment_status: 'pending', // Adjust based on actual payment process
      booking_status: 'pending',
      number_of_travelers: bookingData.number_of_travelers,
      special_requests: bookingData.special_requests,
    };

    try {
      const response = await axios.post('http://localhost:3000/booking', newBooking);

      if (response.status === 200) {
        toast.success('Booking successful!');
      } else {
        toast.error('Booking failed. Please try again later.');
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="container">
      <h2>Book Your Tour</h2>

      {traveller && packageData && travelAgent ? (
        <div className="booking-form">
          <h3>{packageData.package_name}</h3>
          <p>{packageData.description}</p>
          <img src={packageData.package_img} alt={packageData.package_name} style={{ width: '100%', height: 'auto' }} />

          <div className="form-group">
            <label>Number of Travelers</label>
            <input
              type="number"
              name="number_of_travelers"
              className="form-control"
              value={bookingData.number_of_travelers}
              onChange={handleInputChange}
              min="1"
            />
          </div>

          <div className="form-group">
            <label>Special Requests</label>
            <textarea
              name="special_requests"
              className="form-control"
              value={bookingData.special_requests}
              onChange={handleInputChange}
            />
          </div>

          <button type="button" className="btn btn-primary" onClick={handleBooking}>
            Book Now
          </button>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default BookingPackage

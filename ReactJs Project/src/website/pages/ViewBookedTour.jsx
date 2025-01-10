import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { NavLink } from "react-router-dom";

function ViewBookedTour() {
  const [bookings, setBookings] = useState([]); // Store bookings
  const [traveller, setTraveller] = useState(null); // Store logged-in traveller
  const [editBookingId, setEditBookingId] = useState(null); // Store booking id to edit
  const [newNumberOfTravelers, setNewNumberOfTravelers] = useState(0); // New number of travelers for editing
  const [availableSeats, setAvailableSeats] = useState(0); // Store available seats for the package
  const [paymentEditBookingId, setPaymentEditBookingId] = useState(null); // Store booking id for payment edit
  const [paymentMethod, setPaymentMethod] = useState(""); // Store selected payment method

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

  // Fetch package data (to get available seats)
  const fetchPackageData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/package");
      const packageData = response.data[0]; // Assuming there's only one package for simplicity
      setAvailableSeats(packageData.available_seats);
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
      setBookings(filteredBookings);
    } catch (error) {
      console.error("Error fetching booking data:", error);
      toast.error("Error fetching booking data.");
    }
  };

  // Handle cancelling a booking
  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:3000/booking/${bookingId}`);
      const updatedBookings = bookings.filter((booking) => booking.id !== bookingId);
      setBookings(updatedBookings);
      toast.success("Booking cancelled and removed successfully!");
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast.error("Error cancelling booking.");
    }
  };

  // Handle the booking edit
  const handleEditBooking = (bookingId) => {
    setEditBookingId(bookingId);
    const booking = bookings.find((b) => b.id === bookingId);
    setNewNumberOfTravelers(booking.number_of_travelers);
  };

  // Handle saving the updated number of travelers
  const handleSaveEdit = async () => {
    try {
      const updatedBookings = bookings.map((booking) => {
        if (booking.id === editBookingId) {
          const updatedBooking = { ...booking };
          const originalPricePerTraveler = booking.total_price / booking.number_of_travelers;
          updatedBooking.number_of_travelers = newNumberOfTravelers;
          updatedBooking.total_price = originalPricePerTraveler * newNumberOfTravelers;
          return updatedBooking;
        }
        return booking;
      });
      setBookings(updatedBookings);
      await axios.put(
        `http://localhost:3000/booking/${editBookingId}`,
        updatedBookings.find((b) => b.id === editBookingId)
      );
      setEditBookingId(null);
      setNewNumberOfTravelers(0);
      toast.success("Booking updated successfully!");
    } catch (error) {
      console.error("Error saving booking edit:", error);
      toast.error("Error updating booking.");
    }
  };

  // Handle make payment
  const handleMakePayment = (bookingId) => {
    setPaymentEditBookingId(bookingId);
  };

  const handleSavePayment = async () => {
    console.log("Saving payment...");
    const selectedPaymentMethod = paymentMethod || "Pending";
  
    try {
      const booking = bookings.find((b) => b.id === paymentEditBookingId);
      if (!booking) {
        throw new Error("Booking not found");
      }
  
      const updatedPaymentStatus =
        selectedPaymentMethod === "Pending"
          ? "Pending"
          : `Confirmed payment via ${selectedPaymentMethod}`;
  
      console.log("Booking found:", booking);
  
      // Update booking data
      const updatedBooking = { ...booking, payment_status: updatedPaymentStatus };
      console.log("Updating booking:", updatedBooking);
      await axios.put(`http://localhost:3000/booking/${paymentEditBookingId}`, updatedBooking);
  
      // Check if a payment record exists for the booking ID
      const response = await axios.get("http://localhost:3000/payment");
      const existingPayment = response.data.find(
        (payment) => payment.booking_id === paymentEditBookingId
      );
  
      if (existingPayment) {
        console.log("Existing payment record found:", existingPayment);
        // Update the existing payment record
        const updatedPaymentRecord = {
          ...existingPayment,
          payment_method: selectedPaymentMethod,
          payment_status: updatedPaymentStatus,
        };
        console.log("Updating payment record:", updatedPaymentRecord);
        await axios.put(
          `http://localhost:3000/payment/${existingPayment.id}`,
          updatedPaymentRecord
        );
      } else {
        // If no existing payment record, create a new one (edge case)
        const newPaymentRecord = {
          booking_id: paymentEditBookingId,
          traveller_id: booking.traveller_id,
          payment_method: selectedPaymentMethod,
          payment_status: updatedPaymentStatus,
          amount: booking.total_price,
        };
        console.log("Creating new payment record:", newPaymentRecord);
        await axios.post("http://localhost:3000/payment", newPaymentRecord);
      }
  
      // Update state
      const updatedBookings = bookings.map((b) =>
        b.id === paymentEditBookingId ? updatedBooking : b
      );
      setBookings(updatedBookings);
  
      setPaymentEditBookingId(null);
      setPaymentMethod("");
      toast.success(
        selectedPaymentMethod === "Pending"
          ? "Payment status set to Pending."
          : "Payment updated successfully!"
      );
    } catch (error) {
      console.error("Error saving payment:", error.message);
      toast.error("Error updating payment.");
    }
  };
  

  const handleTravelerChange = (action) => {
    setNewNumberOfTravelers((prevCount) => {
      let newCount = action === "increase" ? prevCount + 1 : prevCount - 1;
  
      // Ensure the new number of travelers is within the valid range
      if (newCount < 1) return 1; // Minimum 1 traveler
      if (newCount > availableSeats) return availableSeats; // Maximum available seats
  
      return newCount;
    });
  };
  

  useEffect(() => {
    fetchTravellerData();
    fetchPackageData();
  }, []);

  useEffect(() => {
    if (traveller) {
      fetchBookingData();
    }
  }, [traveller]);

  return (
    <div>
      <Header />
      <div className="container-fluid page-header" style={{ backgroundColor: "#2C3E50" }}>
        <div className="container">
          <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: 400 }}
          >
            <h3 className="display-4 text-white text-uppercase">View Bookings</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <NavLink className="text-white" to="/">
                  Home
                </NavLink>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3" />
              <p className="m-0 text-uppercase">View Bookings</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5" style={{ backgroundColor: "#ECF0F1", borderRadius: "10px" }}>
        <div className="text-center mb-3 pb-3">
          <h6 className="text-primary text-uppercase" style={{ letterSpacing: 5 }}>
            Bookings
          </h6>
          <h1>Your Booked Tours</h1>
        </div>

        {bookings.length === 0 ? (
          <p className="text-center" style={{ fontSize: "20px" }}>No bookings found.</p>
        ) : (
          <div className="row">
            {bookings.map((booking) => (
              <div className="col-lg-12 mb-4" key={booking.id}>
                <div className="card mb-3" style={{ maxWidth: "100%", boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src={booking.package_img}
                        alt={booking.package_name}
                        className="card-img"
                        style={{ height: "100%", objectFit: "cover", borderRadius: "5px 0 0 5px" }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{booking.package_name}</h5>
                        <p className="card-text">
                          <strong>Travel Dates:</strong> {booking.travel_date_start} to {booking.travel_date_end}
                        </p>
                        <p className="card-text">
                          <strong>Booked By:</strong> {booking.traveller_name}
                        </p>
                        <p className="card-text">
                          <strong>Number of Travelers:</strong>
                          {editBookingId === booking.id ? (
                            <div className="d-flex justify-content-center align-items-center">
                              <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={() => handleTravelerChange("decrease")}
                                disabled={newNumberOfTravelers <= 1}
                              >
                                -
                              </button>
                              <span className="mx-3">{newNumberOfTravelers}</span>
                              <button
                                className="btn btn-outline-primary btn-lg"
                                onClick={() => handleTravelerChange("increase")}
                                disabled={newNumberOfTravelers >= availableSeats}
                              >
                                +
                              </button>

                            </div>
                          ) : (
                            booking.number_of_travelers
                          )}
                        </p>
                        <p className="card-text">
                          <strong>Total Price:</strong> {booking.total_price} Rs
                        </p>
                        <p className="card-text">
                          <strong>Booking Status:</strong> {booking.booking_status}
                        </p>
                        <p className="card-text">
                          <strong>Inclusions:</strong> {booking.inclusions}
                        </p>
                        <p className="card-text">
                          <strong>Travel Agent:</strong> {booking.travel_agent_name}
                        </p>
                        <p className="card-text">
                          <strong>Payment Status:</strong> {booking.payment_status}
                        </p>
                        {paymentEditBookingId === booking.id ? (
                          <div className="d-flex flex-column">
                            <select
                              className="form-control mb-3"
                              value={paymentMethod}
                              onChange={(e) => setPaymentMethod(e.target.value)}
                            >
                              <option value="">Select Payment Method</option>
                              <option value="Credit Card">Credit Card</option>
                              <option value="Debit Card">Debit Card</option>
                              <option value="PayPal">PayPal</option>
                              <option value="Bank Transfer">Bank Transfer</option>
                              <option value="Cash">Cash</option>
                            </select>
                            <button className="btn btn-success" onClick={handleSavePayment}>
                              Confirm Payment
                            </button>
                          </div>
                        ) : (
                          <div className="d-flex justify-content-between">
                            {editBookingId === booking.id ? (
                              <button
                                className="btn btn-success"
                                onClick={handleSaveEdit}
                                style={{
                                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                }}
                              >
                                Save
                              </button>
                            ) : (
                              <button
                                className="btn btn-primary"
                                onClick={() => handleEditBooking(booking.id)}
                              >
                                Edit Booking
                              </button>
                            )}
                            <button
                              className="btn btn-danger"
                              onClick={() => handleCancelBooking(booking.id)}
                            >
                              Cancel Booking
                            </button>
                            <button
                              className="btn btn-warning"
                              onClick={() => handleMakePayment(booking.id)}
                            >
                              Make Payment
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default ViewBookedTour;

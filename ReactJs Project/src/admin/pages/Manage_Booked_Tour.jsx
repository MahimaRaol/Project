import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aheader from '../common/Aheader';

function Manage_Booked_Tour() {
    const redirect = useNavigate();
    const [bookings, setBookings] = useState([]);
    const [editBookingId, setEditBookingId] = useState(null);
    const [newNumberOfTravelers, setNewNumberOfTravelers] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        if (!localStorage.getItem('adminid')) {
            redirect('/admin-login');
        }
    }, [redirect]);

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await axios.get('http://localhost:3000/booking');
            setBookings(response.data);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            toast.error('Failed to fetch bookings.');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminid');
        localStorage.removeItem('adminname');
        toast.success('Logout successful!');
        redirect('/admin-login');
    };

    // Handle booking edit
    const handleEditBooking = (bookingId) => {
        setEditBookingId(bookingId);
        const booking = bookings.find((b) => b.id === bookingId);
        setNewNumberOfTravelers(booking.number_of_travelers);
        setSelectedBooking(booking);
        setShowModal(true);
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

            // Send the updated booking to the backend
            const updatedBooking = updatedBookings.find((b) => b.id === editBookingId);
            await axios.put(`http://localhost:3000/booking/${editBookingId}`, updatedBooking);

            // Close the modal and reset the edit mode
            setShowModal(false);
            setEditBookingId(null);
            setNewNumberOfTravelers(0);
            toast.success('Booking updated successfully!');
        } catch (error) {
            console.error('Error saving booking edit:', error);
            toast.error('Error updating booking.');
        }
    };

    // Handle number of travelers change with + and -
    const handleTravelerChange = (action) => {
        setNewNumberOfTravelers((prevCount) => {
            let newCount = action === 'increase' ? prevCount + 1 : prevCount - 1;

            // Ensure the new number of travelers is within a valid range
            if (newCount < 1) return 1; // Minimum 1 traveler
            return newCount;
        });
    };

    const handleCancelEdit = () => {
        setShowModal(false);
        setEditBookingId(null);
        setNewNumberOfTravelers(0);
    };

    const handleDeleteBooking = async (bookingId) => {
        try {
            await axios.delete(`http://localhost:3000/booking/${bookingId}`);
            setBookings((prev) => prev.filter((b) => b.id !== bookingId));
            toast.success('Booking deleted successfully!');
        } catch (error) {
            console.error('Error deleting booking:', error);
            toast.error('Failed to delete booking.');
        }
    };

    return (
        <div>
            <Aheader />
            <div>
                <section className="contact-us section">
                    <div className="container">
                        <div className="inner">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-us-form">
                                        <h2>Manage Booked Tours</h2>
                                        <br />
                                        <div className="table-responsive">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Booking ID</th>
                                                        <th>Package Image</th>
                                                        <th>Package Name</th>
                                                        <th>Traveller Name</th>
                                                        <th>Travel Agent Name</th>
                                                        <th>Start Date</th>
                                                        <th>End Date</th>
                                                        <th>Total Travellers</th>
                                                        <th>Total Price per person</th>
                                                        <th>Payment Status</th>
                                                        <th>Booking Status</th>
                                                        <th>Inclusions</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {bookings.map((booking) => (
                                                        <tr key={booking.id}>
                                                            <td>{booking.id}</td>
                                                            <td><img src={booking.package_img} alt="Package" width="100px" height="80px" /></td>
                                                            <td>{booking.package_name}</td>
                                                            <td>{booking.traveller_name}</td>
                                                            <td>{booking.travel_agent_name}</td>
                                                            <td>{booking.travel_date_start}</td>
                                                            <td>{booking.travel_date_end}</td>
                                                            <td>{booking.number_of_travelers}</td>
                                                            <td>{booking.total_price}</td>
                                                            <td>{booking.payment_status}</td>
                                                            <td>{booking.booking_status}</td>
                                                            <td>{booking.inclusions}</td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-primary btn-sm"
                                                                    onClick={() => handleEditBooking(booking.id)}
                                                                >
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger btn-sm ml-2"
                                                                    onClick={() => handleDeleteBooking(booking.id)}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ToastContainer />
            </div>

            {/* Modal for editing booking */}
            {showModal && (
                <div className="modal" style={{ display: 'block', paddingTop: '50px' }}>
                    <div className="modal-dialog" style={{ maxWidth: '800px', margin: 'auto' }}>
                        <div className="modal-content" style={{ height: '400px', overflowY: 'scroll' }}>
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Booking</h4>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={handleCancelEdit}
                                    style={{
                                        color: 'red',
                                        cursor: 'pointer',
                                        fontSize: '24px',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                    }}
                                >
                                    ×
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div className="modal-body">
                                {selectedBooking && (
                                    <div>
                                        <p><strong>Package Name:</strong> {selectedBooking.package_name}</p>
                                        <p><strong>Package Image:</strong><img src={selectedBooking.package_img} width="50%" alt="Package" /></p>
                                        <p><strong>Traveller Name:</strong> {selectedBooking.traveller_name}</p>
                                        <p><strong>Travel Agent Name:</strong> {selectedBooking.travel_agent_name}</p>
                                        <p><strong>Start Date:</strong> {selectedBooking.travel_date_start}</p>
                                        <p><strong>End Date:</strong> {selectedBooking.travel_date_end}</p>
                                        <div>
                                            <strong>Number of Travelers:</strong>
                                            <button
                                                className="btn btn-sm btn-secondary"
                                                onClick={() => handleTravelerChange('decrease')}
                                            >
                                                -
                                            </button>
                                            <span className="mx-2">{newNumberOfTravelers}</span>
                                            <button
                                                className="btn btn-sm btn-secondary"
                                                onClick={() => handleTravelerChange('increase')}
                                            >
                                                +
                                            </button>
                                        </div><br />
                                        <p><strong>Total Price per person:</strong> {selectedBooking.total_price}</p>
                                        <p><strong>Payment Status:</strong> {selectedBooking.payment_status}</p>
                                        <p><strong>Booking Status:</strong> {selectedBooking.booking_status}</p>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={handleSaveEdit}
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleCancelEdit}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Manage_Booked_Tour;

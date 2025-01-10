import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aheader from '../common/Aheader';

function View_Bookings() {
    const redirect = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('adminid')) {
            redirect('/admin-login');
        }
    }, [redirect]);

    const adminlogout = () => {
        localStorage.removeItem('adminid');
        localStorage.removeItem('adminname');
        toast.success('Logout Success');
        redirect('/admin-login');
    };

    const [bookings, setBookings] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        try {
            // Fetch booking data
            const bookingRes = await axios.get(`http://localhost:3000/booking`);
            const bookingsData = bookingRes.data;
            setBookings(bookingsData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleViewBooking = (booking) => {
        setSelectedBooking(booking);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedBooking(null);
        toast.success('Just View Booked Tour Successfully. Thank you!', {
            autoClose: 1500
        });
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
                                        <h2>View Booked Tours</h2>
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
                                                    {bookings.map((value, index) => (
                                                        <tr key={index}>
                                                            <td>{value.id}</td>
                                                            <td><img src={value.package_img} width="100px" height="80px" alt="Package" /></td>
                                                            <td>{value.package_name}</td>
                                                            <td>{value.traveller_name}</td>
                                                            <td>{value.travel_agent_name}</td>
                                                            <td>{value.travel_date_start}</td>
                                                            <td>{value.travel_date_end}</td>
                                                            <td>{value.number_of_travelers}</td>
                                                            <td>{value.total_price}</td>
                                                            <td>{value.payment_status}</td>
                                                            <td>{value.booking_status}</td>
                                                            <td>{value.inclusions}</td>
                                                            <td>
                                                                <button
                                                                    className='btn btn-primary'
                                                                    onClick={() => handleViewBooking(value)}
                                                                >
                                                                    View Booking
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

                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                    <i className="fa fa-angle-double-up" />
                </a>
            </div>

            {/* Modal for viewing booking */}
            {showModal && (
                <div className="modal" style={{ display: 'block', paddingTop: '50px' }}>
                    <div className="modal-dialog" style={{ maxWidth: '800px', margin: 'auto' }}>
                        <div className="modal-content" style={{ height: '400px', overflowY: 'scroll' }}>
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">View Booking</h4>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={handleCloseModal}
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
                                        <p><strong>Package Image:</strong><br />
                                            <img src={selectedBooking.package_img} width="100%" alt="Package" />
                                        </p>
                                        <p><strong>Traveller Name:</strong> {selectedBooking.traveller_name}</p>
                                        <p><strong>Travel Agent Name:</strong> {selectedBooking.travel_agent_name}</p>
                                        <p><strong>Start Date:</strong> {selectedBooking.travel_date_start}</p>
                                        <p><strong>End Date:</strong> {selectedBooking.travel_date_end}</p>
                                        <p><strong>Total Travellers:</strong> {selectedBooking.number_of_travelers}</p>
                                        <p><strong>Total Price per person:</strong> {selectedBooking.total_price}</p>
                                        <p><strong>Payment Status:</strong> {selectedBooking.payment_status}</p>
                                        <p><strong>Booking Status:</strong> {selectedBooking.booking_status}</p>
                                        <p><strong>Inclusions:</strong> {selectedBooking.inclusions}</p>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={handleCloseModal}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <ToastContainer />
        </div>
    );
}

export default View_Bookings;

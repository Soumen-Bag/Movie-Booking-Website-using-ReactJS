import React from 'react';

const BookingDetails = ({ booking }) => {
    return (
        <div className="booking-details">
            <h2>Booking Details</h2>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Time:</strong> {booking.time}</p>
            <p><strong>Location:</strong> {booking.location}</p>
        </div>
    );
};

export default BookingDetails;
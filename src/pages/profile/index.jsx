import React, { useEffect, useState } from "react";
import "./profile.css";
import { getData } from "../../localstorage";
import Button from "../../Components/Button/Button";
import { logout } from "../../api";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    const current_user = getData("currentUser");
    setCurrentUser(current_user);
  }, []);

  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="user-details">
        <h2>User Details</h2>
        <p>Name: {currentUser.name}</p>
        <p>Email: {currentUser.email}</p>
      </div>
      <div className="booking-details" id="bookings">
        <h2>Booking Details</h2>
        <ul>
          {currentUser?.bookings
            ?.sort((a, b) => new Date(b.bookedDate) - new Date(a.bookedDate))
            ?.map((booking) => (
              <li key={booking.id} className="booking-item">
                <p>Movie: {booking.movie?.title}</p>
                <p>Date: {booking.bookedDate}</p>
                <p>Time: {booking.time}</p>
              </li>
            ))}
        </ul>
      </div>
      <div className="log-out-button">
        <Button className="hero-button" label="Log Out" onClick={logout}/>
      </div>
    </div>
  );
};

export default Profile;

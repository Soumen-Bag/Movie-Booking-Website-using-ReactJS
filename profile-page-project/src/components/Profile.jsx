import React from 'react';

const Profile = () => {
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        profilePicture: "https://via.placeholder.com/150"
    };

    return (
        <div className="profile">
            <img src={user.profilePicture} alt="Profile" />
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default Profile;
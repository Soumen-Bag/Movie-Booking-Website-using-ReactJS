import React from 'react';
import Profile from './components/Profile';
import BookingDetails from './components/BookingDetails';
import './styles/styles.css';

function App() {
    return (
        <div className="App">
            <Profile />
            <BookingDetails />
        </div>
    );
}

export default App;
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginAndSignUp from "./pages/LoginAndSignUp/LoginAndSignUp";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import NavBar from "./pages/NavBar.jsx/NavBar";
import MovieDetails from "./pages/Movie_Details/MovieDetails";
import BookingPage from "./pages/Booking_Page/BookingPage";
import SignUp from "./pages/LoginAndSignUp/SignUp";
import { Bounce, ToastContainer } from "react-toastify";
import Profile from "./pages/profile";
import AllPopularMovies from "./pages/All_PopularMovies/AllPopularMovies";
import AllTopRatedMovies from "./pages/All_top_rated_movies/AllTopRatedMovies";
import AllNowPlayingMovies from "./pages/All_now-playing_Movies/AllNowPlayingMovies";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/booking" element={<BookingPage />} />
        <Route path="/login" element={<LoginAndSignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/allpopularmovies" element={<AllPopularMovies />} />
        <Route path="/allto_ratedmovies" element={<AllTopRatedMovies />} />
        <Route path="/allnow_playing_movies" element={<AllNowPlayingMovies/>} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div>
        <p>CopyRight Soumen Bag 2024 </p>
      </div>
    </BrowserRouter>
  );
}

export default App;

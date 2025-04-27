import React from "react";
import "../MovieCard/MovieCard.css";
import cardImage from "../../assets/Images/background.jpg";
import { FaStar } from "react-icons/fa";
import { IMAGE_URL, ratingCount, voteCount } from "../../constant";
import { useNavigate } from "react-router";
const MovieCard = ({ movie }) => {
  // console.log(movie);
  const navigate = useNavigate();
  return (
    <div className="movie-card" onClick={() => navigate(`/movies/${movie.id}`)}>
      <div className="movie-card-sub">
        <img src={IMAGE_URL + movie?.poster_path} className="movie-poster" />
        <div className="movie-details">
          <FaStar className="movie-rating" />
          <span>{ratingCount(movie?.vote_average)}/10</span>
          <span>{voteCount(movie?.vote_count)}k Votes</span>
        </div>
      </div>
      <div className="movie-name-div">
        <h3>{movie?.title}</h3>
        <p>Action/Thiller</p>
      </div>
    </div>
  );
};

export default MovieCard;

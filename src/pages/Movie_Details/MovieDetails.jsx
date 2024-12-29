import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import "../Movie_Details/MovieDetails.css";
import { IMAGE_URL, ratingCount, voteCount } from "../../constant";
import { FaStar } from "react-icons/fa";
import Button from "../../Components/Button/Button";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const apikey = "f63d74f563efc8587a9e0f0b6ab4f12b";
  const fetchMovieDetails = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}`
      );
      // console.log(res.data);
      setMovieDetails(res?.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);
  return (
    <div className="movie-details-section">
      <div
        className="movie-details-section-backdrop"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(26, 26, 26, 1) 24.97%, rgba(26, 26, 26, 1) 38.3%, rgba(26, 26, 26, 0.04) 97.47%), 
          url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`,
          // backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path})`,
          // background: `url(${homepage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // color: "white", // Ensure text is readable
          // minHeight: "80vh", // Full-screen height
        }}
      >
        <div className="movie-details-section-movie-card">
          <img
            src={IMAGE_URL + movieDetails?.poster_path}
            className="movie-details-section-movie-poster"
          />
          <p className="movie-details">In cinemas</p>
        </div>
        <div>
          <h1 className="movie-details-section-title">{movieDetails?.title}</h1>
          <div className="movie-details-section-rating">
            <FaStar className="movie-rating" />
            <span>{ratingCount(movieDetails?.vote_average)}/10</span>
            <span>{voteCount(movieDetails?.vote_count)}k Votes</span>
          </div>
          <div className="movie-details-section-language">
            Language:{" "}
            <span>
              {movieDetails?.spoken_languages
                ?.map((item) => item?.english_name)
                .join(", ")}
            </span>
          </div>
          <div>
            <div className="movie-details-section-type">
              <span>UA • </span>
              <span>
                {movieDetails?.genres?.map((item) => item?.name).join("/ ")}
              </span>
            </div>
          </div>
          <Button
            className="hero-button"
            label="Book Now"
            onClick={() => navigate(`/movies/${movieDetails.id}/booking`,{
              state: movieDetails
            })}
          />
        </div>
      </div>
      <div className="movie-details-section-about-us">
        <h1>About Us</h1>
        <p>
          <span>{movieDetails?.title}</span>
          <span>{movieDetails?.overview}</span>
        </p>
        <Button
          className="more-details-about-movie"
          label="More Details about movie"
        />
      </div>
    </div>
  );
};

export default MovieDetails;

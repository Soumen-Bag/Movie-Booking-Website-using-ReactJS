import React, { useEffect, useState } from "react";
import "../Home/Home.css";
import Button from "../../Components/Button/Button";
import MovieCard from "../../Components/MovieCard/MovieCard";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router";
const Home = () => {
  const naviagte=useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  // console.log(isLO)
  const [topRatedMovie, setTop] = useState([]);
  const getTopRatedMovie = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjNkNzRmNTYzZWZjODU4N2E5ZTBmMGI2YWI0ZjEyYiIsIm5iZiI6MTczMzQ4ODkxNi44NDgsInN1YiI6IjY3NTJmMTE0OGUwMzNlOTEzNmRjODIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.omvj4HhEI3xjFbohEGU7nMAH39PYxRb_8iIUjh7DrKw",
          },
        }
      );
      console.log(res.data);
      setTop(res?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };
  const [nowPlaying, setnowPlaying] = useState([]);
  const getNowPlaying = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/now_playing",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjNkNzRmNTYzZWZjODU4N2E5ZTBmMGI2YWI0ZjEyYiIsIm5iZiI6MTczMzQ4ODkxNi44NDgsInN1YiI6IjY3NTJmMTE0OGUwMzNlOTEzNmRjODIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.omvj4HhEI3xjFbohEGU7nMAH39PYxRb_8iIUjh7DrKw",
          },
        }
      );
      console.log(res.data);
      setnowPlaying(res?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };
  const [popular, setPopular] = useState([]);
  const getPopular = async () => {
    try {
      const res = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjNkNzRmNTYzZWZjODU4N2E5ZTBmMGI2YWI0ZjEyYiIsIm5iZiI6MTczMzQ4ODkxNi44NDgsInN1YiI6IjY3NTJmMTE0OGUwMzNlOTEzNmRjODIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.omvj4HhEI3xjFbohEGU7nMAH39PYxRb_8iIUjh7DrKw",
          },
        }
      );
      console.log(res.data);
      setPopular(res?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      await getTopRatedMovie();
      await getPopular();
      await getNowPlaying();
      setIsLoading(false);
    };

    fetchMovies();
  }, []);
  
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className="hero-section">
        <h1 className="hero-section-h1">Book Your Next Movie Adventure</h1>
        <p className="hero-section-p">
          Browse the latest movies, reserve your seats, and get ready to enjoy
          the ultimate cinematic experience
        </p>
        <Button className="hero-button" label="Explore Movies" onClick={()=>naviagte('/movies')} />
      </div>
      {/* now-playing */}
      <div className="top-rated-movie">
        <div className="top-rated-movie-heading-div">
          <h1>Now Playing</h1>
          <Button className="top-rated-movie-see-all-button" label="See All"
           onClick={()=>naviagte('/allnow_playing_movies')}/>
        </div>
        <div className="movie-card-section">
          {nowPlaying?.slice(0, 5)?.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      </div>
      {/* top-rated */}
      <div className="top-rated-movie">
        <div className="top-rated-movie-heading-div">
          <h1>Top Rated Movie</h1>
          <Button className="top-rated-movie-see-all-button" label="See All" onClick={()=>naviagte('/allto_ratedmovies')} />
        </div>
        <div className="movie-card-section">
          {topRatedMovie?.slice(0, 5)?.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      </div>
      {/* popular */}
      <div className="top-rated-movie">
        <div className="top-rated-movie-heading-div">
          <h1>Popular Movies</h1>
          <Button className="top-rated-movie-see-all-button" label="See All" onClick={()=>naviagte('/allpopularmovies')} />
        </div>
        <div className="movie-card-section">
          {popular?.slice(0, 5)?.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
      </div>
      {/* <Loader /> */}
    </div>
  );
};

export default Home;
//ami eitar ekta code sob section a use korte chaichi. dara aga ami api call ta kore niy
// wait for 5 min  okk tui api gulo bana. hmmm.  hmm kor..dara boroma call korcha..ami call korchi toke
// ami 2 min a kore dichhi

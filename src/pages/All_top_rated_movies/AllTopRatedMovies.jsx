import React, { useEffect, useState } from "react";
import "../All_top_rated_movies/AllTopRatedMovies.css";
import Button from "../../Components/Button/Button";
import axios from "axios";
import MovieCard from "../../Components/MovieCard/MovieCard";
const AllTopRatedMovies = () => {
  const [pagination, setPagination] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [allMovies, setAllMovies] = useState([]);
  const apikey = "f63d74f563efc8587a9e0f0b6ab4f12b";
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&page=${pagination}`
      );
      console.log(res.data);
      setAllMovies(res?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };
  const getSearchMovie=async()=>{
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchQuery}`
      );
      // console.log(res.data);
      setAllMovies(res?.data?.results)
    } catch (error) {
      console.log(error);
    }
  }
  // const searchMovie=(e)=>{
  //   e.preventDefault()
  //   getSearchMovie();
  //   setSearchQuery("")
  // }
  useEffect(()=>{
    getSearchMovie()
  },[searchQuery])
  useEffect(() => {
    getAllMovies();
  }, [pagination]);
  return (
    <div className="movies-main-div">
      <div>
        <input
          placeholder="search the movie"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <Button className="search-button" label="search" onClick={searchMovie} /> */}
      </div>
      <h1>Top Rated Movies</h1>
      <div className="all-movie-card-section">
        {allMovies?.map((movie, index) => {
          return <MovieCard movie={movie} key={index} />;
        })}
      </div>
      <div className="pagination-div">
        <Button
          className="pagination-button"
          label="Previous"
          onClick={() =>
            pagination > 1 ? setPagination(pagination - 1) : setPagination(1)
          }
        />
        <Button className="pagination-button" label={`${pagination}`} />
        <Button
          className="pagination-button"
          label="Next"
          onClick={() => setPagination(pagination + 1)}
        />
      </div>
    </div>
  );
};

export default AllTopRatedMovies;

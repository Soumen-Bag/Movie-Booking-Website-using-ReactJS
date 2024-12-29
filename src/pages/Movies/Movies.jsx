import React, { useEffect, useState } from "react";
import "../Movies/Movies.css";
import Button from "../../Components/Button/Button";
import axios from "axios";
import MovieCard from "../../Components/MovieCard/MovieCard";
import Loader from "../../Components/Loader/Loader";
const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [allMovies, setAllMovies] = useState([]);
  const apikey = "f63d74f563efc8587a9e0f0b6ab4f12b";
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}&page=${pagination}&with_original_language=${selectedLanguage}`
      );
      // console.log(res.data);
      setAllMovies(res?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };
  const getSearchMovie = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${searchQuery}`
      );
      // console.log(res.data);
      setAllMovies(res?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };
  // const searchMovie=(e)=>{
  //   e.preventDefault()
  //   getSearchMovie();
  //   setSearchQuery("")
  // }
  useEffect(() => {
    getSearchMovie();
  }, [searchQuery]);
  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      await getAllMovies();
      setIsLoading(false);
    };
    getMovies();
  }, [pagination, selectedLanguage]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="movies-main-div">
      <div className="search-movie-div">
        <input
          placeholder="search the movie"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* <Button className="search-button" label="search" onClick={searchMovie} /> */}
      </div>
      <h1>All Movies</h1>
      <div className="language-button-div">
        <Button
          className="language-button"
          label="All"
          onClick={() => setSelectedLanguage("")}
        />
        <Button
          className="language-button"
          label="English"
          onClick={() => setSelectedLanguage("en")}
        />
        <Button
          className="language-button"
          label="Bengali"
          onClick={() => setSelectedLanguage("bn")}
        />
        <Button
          className="language-button"
          label="Hindi"
          onClick={() => setSelectedLanguage("hi")}
        />
        <Button
          className="language-button"
          label="Tamil"
          onClick={() => setSelectedLanguage("ta")}
        />
        <Button
          className="language-button"
          label="Telegu"
          onClick={() => setSelectedLanguage("te")}
        />
        <Button
          className="language-button"
          label="Karnanor"
          onClick={() => setSelectedLanguage("kn")}
        />
        <Button
          className="language-button"
          label="Malayalom"
          onClick={() => setSelectedLanguage("ml")}
        />
      </div>
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

export default Movies;

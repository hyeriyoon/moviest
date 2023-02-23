import React from "react";
import { useState, useEffect } from 'react';

  const MovieSorting =({parentFunction})=>{
  const [sortedMovie, setSortedMovie] = useState("popular");
  const movieChange = (e) => {
    setSortedMovie(e.target.value);
    parentFunction(sortedMovie);
  }
  
    console.log(sortedMovie);
  return(
    <div>
    <select onChange={movieChange} name="movie-sorting" className="movie-sorting">
      <option value="popular">Popular</option>  
      <option value="now playing">Now Playing</option>  
      <option value="top rated">Top Rated</option>  
      <option value="upcoming">Upcoming</option>  
    </select>
    </div>
  );
};

export default MovieSorting;
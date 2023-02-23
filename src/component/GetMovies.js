import React from "react";
import { movieImg } from "../global/globalVariables";
import FavouriteButton from "./FavouriteButton";
import MoreInfoBtn from "./MoreInfoBtn";
import RatingStars from "./RatingStars";
import { useState, useEffect } from "react";

const GetMovies = ({
  title,
  poster_path,
  release_date,
  overview,
  vote_average,
  id,
  movieReq,
}) => {
  //movie poster hover
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <img className="movie-poster" src={movieImg + poster_path} alt={title} />
      {(window.innerWidth < 800 || isHovering) && (
        <div className="movie-info">
          <div className="titleAndFav">
            <h1>{title}</h1>
            <FavouriteButton id={movieReq.id} />
          </div>
          <p>{release_date}</p>
          <div className="rating">
            <RatingStars rating={movieReq.vote_average} {...movieReq} />
            <p>{vote_average.toFixed(1)}</p>
          </div>
          <p className="truncate">{overview}</p>
        </div>
      )}
      {(window.innerWidth < 800 || isHovering) && (
        <a href={`/movie/${id}`}>
          <MoreInfoBtn id={id} />
        </a>
      )}

      
     
    </div>
  );
};

export default GetMovies;

import React from "react";
import { movieImg } from "../global/globalVariables";
import FavouriteButton from "./FavouriteButton";
import RatingStars from "./RatingStars";

const GetMovie = ({
  title,
  poster_path,
  release_date,
  overview,
  vote_average,
  id,
  film,
}) => {
  return (
    <div className="a-movie-card">
      <img className="a-movie-poster" src={movieImg + poster_path} alt={title} />
      <div className="a-movie-info">
        <div className="a-titleAndFav">
          <h1>{title}</h1>
          <FavouriteButton />
        </div>
        <div className="a-date-rating">
          <p>{release_date}</p>
          <p>{vote_average}</p>
          {/* <RatingStars rating={vote_average} /> */}
        </div>
        <p className="title-overview">Overview</p>
        <p className="a-overview">{overview}</p>
      </div>

      <a href={`/movie/${id}`}></a>
    </div>
  );
};

export default GetMovie;

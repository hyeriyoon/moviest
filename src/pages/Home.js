//Page - Home
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  appTitle,
  popularAPI,
  topRatedAPI,
  nowPlayingAPI,
  upcomingAPI,
} from "../global/globalVariables";
import GetMovies from "../component/GetMovies";
import Moviesorting from "../component/Moviesorting";
import globalVariables from "../global/globalVariables";
import isFave from "../utilities/isFave";

const Home = () => {
  useEffect(() => {
    document.title = `${appTitle} - Home`;
  }, []);

  const [movies, setMovies] = useState([]);

 

  const [filter, setFilter] = useState("popular");
  const parentFunction = (e) => {
    setFilter(e);
  };
  const getEndpoint = (filter) => {
    switch (filter) {
      case "popular":
        return popularAPI;
      case "top rated":
        return topRatedAPI;
      case "now playing":
        return nowPlayingAPI;
      case "upcoming":
        return upcomingAPI;
      default:
        console.log("invalid endpoint");
    }
  };

  useEffect(() => {
    const endpoint = getEndpoint(filter);
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.slice(0, 12));
      });
  }, [filter]);

  
  const { id } = useParams();

 
  return (
    <section className="home-return-section">
      <Moviesorting parentFunction={parentFunction} />
      <div className="movie-card">
        {movies.map((movieReq) => (
          <GetMovies
            
            movieReq={movieReq}
            key={movieReq.id}
            {...movieReq}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { apiKey, movieImg } from "../global/globalVariables";
import { useParams } from "react-router-dom";
import { shortAPI } from "../global/globalVariables";
import GetMovie from "../component/GetMovie";
import RatingStars from "../component/RatingStars";

const Single = () => {
  const [film, setFilm] = useState([]);
  const [casts, setCasts] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    const getSingleMovie = () => {
      fetch(`${shortAPI}${id}?api_key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          setFilm(data);
        });
    };
    getSingleMovie();

    const getCastingInfo = () => {
      fetch(`${shortAPI}${id}/credits?api_key=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCasts(data.cast.slice(0, 4));
          console.log(casts);
        });
    };
    getCastingInfo();
  }, []);

  return (
    <div className="page-single">
      <GetMovie {...film} />
      <section className="section-cast">
        <p className="title-cast">Cast</p>
        <div className="cast-wrap">
          {casts.map((aCast) => (
            <div className="cast">
              <img src={movieImg + aCast.profile_path} alt="actors" />
              <p className="cast-name"> {aCast.name} </p>
              <p className="cast-char"> {aCast.character} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Single;

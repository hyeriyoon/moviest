//Page - Favourite
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { appTitle, favesRepo } from "../global/globalVariables";
import GetMovies from "../component/GetMovies";
import MovieSorting from "../component/Moviesorting";
import isFave from "../utilities/isFave";
import { movieImg } from "../global/globalVariables";
import { shortAPI, apiKey } from "../global/globalVariables";

const Favourite = () => {
  const [fav, setFav] = useState([]);
  // useEffect(() => {
  //   document.title = `${appTitle} - Favourite`;
  // }, []);

  // favourites part
  // const faves = useSelector((state) => state.faves.items);
  // favourites part ^^
  let favMovie = localStorage.getItem('favourite');
  favMovie = JSON.parse(favMovie);

  console.log(favMovie);  
  
  const[favId, setFavId] = useState();

  useEffect(()=>{
    let i;
      for(i=0; i<favMovie.length-1; i++){
        setFavId(favMovie[i].id);
        console.log(favMovie[i].id);
        
          const getFavMovie = () => {
            
                fetch(`${shortAPI}${favMovie[i].id}?api_key=${apiKey}`)
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);
                  fav.push(data);
                  console.log(fav);
                });
            }
          getFavMovie();
          }
  },[]);
  

  
  return (
    <section className="favourite">
      <h2>Favourite</h2>
      {favMovie.length < 1 ? (
        <p>
          "Oh! Looks like you have no favourited movies. Return to the home page
          to add a favourite movie."
        </p>
      ) : (
        <div>
        {fav.map((aFav)=>(
          <div>
            <img  src={movieImg + aFav.poster_path} alt={aFav.title}/>         
            {/* <div className="movie-info">
              <div className="titleAndFav">
                <h1>{aFav.title}</h1>
                <FavouriteButton id={movieReq.id}/>
              </div>
              <p>{aFav.release_date}</p>
              <div className="rating">
                <RatingStars rating={aFav.vote_average} {...aFav}/>
                <p>{aFav.vote_average.toFixed(1)}</p>
              </div>
              <p className="truncate">{aFav.overview}</p>
            </div> */}
          </div>
          ))}
          {/* {isHovering &&(
            <a href={`/movie/${id}`}>
            <MoreInfoBtn id={id} />
          </a>
           */}
              {/* ))} */}           
        </div>
      )}
    </section>
  );
};
export default Favourite;

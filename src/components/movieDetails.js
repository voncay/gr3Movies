import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import axios from "axios";
import "./MovieDetails.css";
// import CurrencyFormat from 'react-currency-format';

const Movie = () => {
  // let location = useLocation();
  // console.log(location, "location");

  let { id } = useParams();

  // const [moviesData, setMoviesData] = useContext(MoviesContext);
  const [movie, setMovie] = useState({});

  const fetchMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`
      )
      .then((res) => {
        setMovie(res.data);
        console.log(res.data, "moviedetails");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="page">
      <h1 className="margin">{movie.title}</h1>
      <p className="margin">
        <b>Release in theatre :</b> {movie.release_date}
      </p>
      <p className="margin">
        <b>Profits :</b> {movie.revenue - movie.budget} $
      </p>
      {/* <h3>Profits : <CurrencyFormat value={movie.revenue - movie.budget} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h3> */}
      <h4 className="margin">Genres :</h4>
      <div className="genres">
        {movie.genres ? (
          movie.genres.map((e) => {
            return (
              <ul style={{ listStyleType: "none"}}>
                <li>{e.name}</li>
              </ul>
            );
          })
        ) : (
          <p>Unknown</p>
        )}
      </div>
      <h4 className="margin">Produced by :</h4>
      <div className="genres">
        {movie.production_companies ? (
          movie.production_companies.map((e) => {
            return (
                <ul style={{ listStyleType: "none" }}>
                  <li>{e.name}</li>
                </ul>
            );
          })
        ) : (
          <p>Unknown</p>
        )}
      </div>
      <h4 className="margin">Synopsis : </h4>
      {movie.overview ? (
        <p className="synopsis">{movie.overview}</p>
      ) : (
        <p>Unknown</p>
      )}
    </div>
  );
};

export default Movie;

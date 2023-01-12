import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import axios from 'axios'

const Movie = () => {
  // let location = useLocation();
  // console.log(location, "location");

  let { id } = useParams();

  // const [moviesData, setMoviesData] = useContext(MoviesContext);
  const [movie, setMovie] = useState({})

  const fetchMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`
      )
      .then((res) => {
        setMovie(res);
        console.log(res)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
};

export default Movie;

import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import MovieCard from "./MovieCard";
import "../App.css";

const MoviesList = () => {
    
  const [movies, setMovies] = useContext(MoviesContext);
  // console.log(movies, "movies");

  return (
    <>
      {movies.map((e, i) => {
        return (
          <div key={i} className="card">
            <MovieCard movie={e} />
          </div>
        );
      })}
    </>
  );
};

export default MoviesList;

import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

const MoviesList = () => {

    const [movies, setMovies] = useContext(MoviesContext);
    console.log(movies, "movies")

    return(
        <>
        {/* list of cards */}
        </>
    )
}

export default MoviesList
import { createContext,useState, useEffect } from "react";
import axios from 'axios'

export const MoviesContext = createContext()

export const MoviesController = (props) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  console.log(movies, "movies")
  console.log(props, "props")

  const fetchMovies = () => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`)
    .then(res => setMovies(res.data.results))
    .then(() => setLoading(false))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return(
    <MoviesContext.Provider value={[movies, setMovies]}>
        {!loading && props.children}
    </MoviesContext.Provider>
  )
}

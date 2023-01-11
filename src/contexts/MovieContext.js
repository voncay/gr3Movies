import { createContext,useState, useEffect } from "react";
import axios from 'axios'

export const MovieContext = createContext()


export const MovieController = (props) => {
  const [movie, setMovie] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMovie()
  }, [])

  const fetchMovie = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`)
    .then(res => setMovie(res.data))
    .then(() => setLoading(false))
    .catch(err => console.log(err))
  }

  return(
    <MovieContext.Provider value={[movie, setMovie]}>
        {!loading && props.children}
    </MovieContext.Provider>
  )
}

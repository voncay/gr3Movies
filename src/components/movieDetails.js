import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { MovieContext } from '../contexts/MovieContext';

const movie = () => {

    let location = useLocation()
    console.log(location, "location")

    let { countryID } = useParams();


    const [movieData, setMovieData] = useContext(MovieContext);

    const fetchMovie = async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`)
        .then(res => {
            setMovieData(res)
            // console.log(res.data.results)
        })
        .catch(err => console.log(err))
      }
    
      useEffect(() => {
        fetchMovie();
      }, [])


    return(
        <>
        </>
    )
}

export default movie
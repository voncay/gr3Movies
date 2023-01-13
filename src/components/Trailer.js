import { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player/youtube";

const Trailer = () => {
  const [movieRandom, setMovieRandom] = useState({});

  let random = Math.floor(Math.random() * 1000);

  const fetchMovieRandom = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${random}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`
      )
      .then((res) => {
        setMovieRandom(res.data);
        console.log(res.data, "trailer");
      })
      .catch((err) => console.log(err));
  };

  //   let myTrailer = movieRandom.results[0].key

  useEffect(() => {
    fetchMovieRandom();
  }, []);

  return (
    <div>
      {movieRandom.results ? (
        movieRandom.results.map((e, i) => {
          return (
            <div style={{display: 'flex', justifyContent:'center'}}>
              <ul key={i} style={{ padding: "10px", listStyleType: "none" }}>
                <li>
                  <p>{e.name}</p>
                  <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${e.key}`}
                  />
                </li>
              </ul>
            </div>
          );
        })
      ) : (
        <p>No video available</p>
      )}
    </div>
  );
};

export default Trailer;

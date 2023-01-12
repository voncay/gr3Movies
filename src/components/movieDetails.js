import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./MovieDetails.css";

const Movie = () => {
  let { id } = useParams();

  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});

  const fetchMovie = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`
      )
      .then((res) => {
        setMovie(res.data);
        // console.log(res.data, "moviedetails");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const fetchMovieVideo = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`
      )
      .then((res) => {
        setVideo(res.data);
        // console.log(res.data, "moviedetails video");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchMovieVideo();
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
          movie.genres.map((e, i) => {
            return (
              <ul key={i} style={{ listStyleType: "none" }}>
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
          movie.production_companies.map((e, i) => {
            return (
              <ul key={i} style={{ listStyleType: "none" }}>
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
      <div>
        <h4 className="margin">Videos</h4>
        <div className="videos">
          {video.results ? (
            video.results.map((e, i) => {
              return (
                <ul key={i} style={{ padding: "10px", listStyleType: "none" }}>
                  <li>
                    <p>{e.name}</p>
                    <a
                      href={`https://www.youtube.com/watch?v=${e.key}`}
                      target="_blank"
                    >
                      Link here
                    </a>
                  </li>
                </ul>
              );
            })
          ) : (
            <p>No video available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;

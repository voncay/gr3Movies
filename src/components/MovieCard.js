import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";
import {Link} from 'react-router-dom'

export default function MediaCard(props) {
  const [movies, setMovies] = useContext(MoviesContext);
  console.log(movies, "movies,");

  console.log(props, "MovieCard")

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
        alt="Movie Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release date : {props.movie.release_date}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Details</Button> */}
        <Link to={`/movie/${props.movie.id}`}>Details</Link>
      </CardActions>
    </Card>
  );
}

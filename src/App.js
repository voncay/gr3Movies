import axios from "axios";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MoviesController } from "./contexts/MoviesContext";
import { ResultsController } from "./contexts/ResultsContext";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SearchResults from "./components/SearchResults";

const App = () => {

  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <NavBar setQuery={setQuery}/>
      <ResultsController query={query}>
        <SearchResults />
      </ResultsController>
      <MoviesController>
        <Routes>
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </MoviesController>
    </div>
  );
};

export default App;

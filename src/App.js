import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MoviesController } from "./contexts/MoviesContext";
import { ResultsController } from "./contexts/ResultsContext";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";
import * as React from "react";
import SearchResults from "./components/SearchResults";
import Home from './components/Home'

const App = () => {

  const [query, setQuery] = useState('');
  // console.log(query, "query from App")

  return (
    <div className="App">
      <NavBar setQuery={setQuery}/>
      <Routes>
      { query.length > 0 ?
        <>
          <Route path="/" element={
            <ResultsController query={query}>
              <SearchResults />
            </ResultsController>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </>
        :
        <>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={
            <MoviesController>
              <MoviesList />
            </MoviesController>} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </>
      }
      </Routes>
    </div>
  );
};

export default App;

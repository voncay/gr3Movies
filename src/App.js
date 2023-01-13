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

  return (
    <div className="App">
      <NavBar setQuery={setQuery}/>
      { query.length > 0 ?
        <ResultsController query={query}>
            <Routes>
              <Route path="/" element={<SearchResults />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </ResultsController>
        : <MoviesController>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<MoviesList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </MoviesController>
      }
    </div>
  );
};

export default App;

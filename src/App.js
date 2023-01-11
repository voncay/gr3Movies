import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MoviesController } from "./contexts/MoviesContext";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import MovieDetails from './components/MovieDetails'

const App = () => {
  return (
    <div className="App">
      <MoviesController>
        <NavBar />
        <MoviesList />
        {/* <Routes>
          <Route path='/filmDetails/:id' element={<MovieDetails />} />
        </Routes> */}
      </MoviesController>
    </div>
  );
};

export default App;

import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { MoviesController } from "./contexts/MoviesContext";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import MovieDetails from "./components/MovieDetails";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const App = () => {
  return (
    <div className="App">
      <MoviesController>
        <NavBar />
        <Routes>
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </MoviesController>
    </div>
  );
};

export default App;

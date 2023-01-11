import axios from 'axios'
import {useState, useEffect, useContext} from 'react'
import { Link, Routes } from 'react-router-dom'
import { MoviesController } from './contexts/MoviesContext'
import MoviesList from './components/moviesList'

const App = () => {

  return (
    <div className="App">
      <MoviesController>
        <MoviesList />
      </MoviesController>    
    </div>
  );
}

export default App;

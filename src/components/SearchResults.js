import { useContext } from "react";
import { ResultsContext } from "../contexts/ResultsContext";
import MovieCard from "./MovieCard";
// import "../App.css";

const SearchResults = () => {
    
  const [results] = useContext(ResultsContext);

  return (
    <>
      {results.length > 0 && <h3>Results: {results.length}</h3>}
      {results.map((e, i) => {
        return (
          <>
            <div key={i} className="card">
              <MovieCard movie={e} />
            </div>
          </>
        );
      })}
    </>
  );
};

export default SearchResults;

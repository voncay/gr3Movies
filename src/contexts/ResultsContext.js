import { createContext,useState, useEffect } from "react";
import axios from 'axios'

export const ResultsContext = createContext()

export const ResultsController = (props) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  // console.log(results, "results")
  // console.log(props, "props from ResultsContext")

  const fetchResults = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${props.query}&api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`)
    .then(res => {
      setResults(res.data.results)
      // console.log(res, "response from fechResults")
    })
    .then(() => setLoading(false))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if (props.query.length > 0) {
      fetchResults()
    }
  }, [props.query])

  return(
    <ResultsContext.Provider value={[results, setResults]}>
        {!loading && props.children}
    </ResultsContext.Provider>
  )
}

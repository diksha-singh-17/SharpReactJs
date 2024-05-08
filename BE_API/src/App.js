import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import FormComponent from "./components/FormComponent";

function App() {
  const [parsedData, setParsedData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviehandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const fetcheddata = await fetch("https://swapi.dev/api/films/");
      if (!fetcheddata.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await fetcheddata.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setParsedData(transformedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviehandler();
  }, [fetchMoviehandler]);

  return (
    <React.Fragment>
      <section>
        {" "}
        <FormComponent />
      </section>
      <section>
        <button onClick={fetchMoviehandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && <MoviesList movies={parsedData} />}
        {isloading && <p>Loading....</p>}
        {isloading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

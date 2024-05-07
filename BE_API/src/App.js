import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [parsedData, setParsedData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let timeForFetching;
  const fetchMoviehandler = async () => {
    setIsLoading(true);
    setError(null);

    timeForFetching = setInterval(async () => {
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
    }, 5000);
  };

  const clearMoviehandler = () => {
    clearInterval(timeForFetching);
    console.log("cancelling");
  };
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviehandler}>Fetch Movies</button>
        <button onClick={clearMoviehandler}>Clear Movies</button>
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

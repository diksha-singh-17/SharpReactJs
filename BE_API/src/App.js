import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [parsedData, setParsedData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const fetchMoviehandler = async () => {
    setIsLoading(true);
    const fetcheddata = await fetch("https://swapi.dev/api/films/");
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
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviehandler}>Fetch Movies</button>
      </section>
      <section>
        {!isloading && <MoviesList movies={parsedData} />}
        {isloading && <p>Loading....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;

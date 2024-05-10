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
      const fetcheddata = await fetch(
        "https://sharpener-project-d2242-default-rtdb.firebaseio.com/movies.json"
      );
      if (!fetcheddata.ok) {
        throw new Error("Something went wrong ....Retrying");
      }
      const data = await fetcheddata.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].Title,
          openingText: data[key].Text,
          releaseDate: data[key].releaseDate,
        });
      }
      console.log(loadedMovies);
      setParsedData(loadedMovies);

      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchMoviehandler();
  }, [fetchMoviehandler]);

  const handleDataFromChild = async (movie) => {
    const response = await fetch(
      "https://sharpener-project-d2242-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    // console.log("Parent received Data", data);
  };

  return (
    <React.Fragment>
      <section>
        <FormComponent sendDataToParent={handleDataFromChild} />
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

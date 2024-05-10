import React, { useEffect } from "react";
import classes from "./Movie.module.css";

const Movie = (props) => {
  useEffect(() => {
    deleteMovieHandler(props.id);
  }, []);
  const deleteMovieHandler = (id) => {
    console.log(id, "id", props);

    fetch(
      `https://sharpener-project-d2242-default-rtdb.firebaseio.com/movies/${id}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("Data deleted successfully!");
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.releaseDate}</h3>
      <p>{props.openingText}</p>
      <button
        className={classes.btn}
        onClick={() => {
          deleteMovieHandler(props.id);
        }}
      >
        Delete Movies
      </button>
    </li>
  );
};

export default Movie;

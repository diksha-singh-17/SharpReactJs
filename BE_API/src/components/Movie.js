import React from "react";
import classes from "./Movie.module.css";

const Movie = (props) => {
  const deleteMovieHandler = (id) => {
    console.log(id, "id", props);
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

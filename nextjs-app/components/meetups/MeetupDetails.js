import React from "react";
import classes from "./MeetupDetails.module.css";
const MeetupDetails = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} className={classes.image} />
      <p>{props.address}</p>
    </div>
  );
};

export default MeetupDetails;

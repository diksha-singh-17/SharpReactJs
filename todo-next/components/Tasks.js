import React from "react";
import classes from "./Tasks.module.css";
const Tasks = () => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.headingTask}>Tasks</h1>
      </div>
      <div className={classes.taskContainer}>
        <ul>
          <li className={classes.lists}>
            <h2>Task1</h2>
            <div>
              <button className={classes.buttons}>Complete</button>
              <button className={classes.buttons}>Delete</button>
            </div>
          </li>
          <li className={classes.lists}>
            <h2>Task1</h2>
            <div>
              <button className={classes.buttons}>Complete</button>
              <button className={classes.buttons}>Delete</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;

import React from "react";
import classes from "./Tasks.module.css";
const Tasks = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.headingTask}>Tasks</h1>
      </div>
      <div className={classes.taskContainer}>
        <ul>
          {props?.todoData?.map((item) => {
            return (
              <li className={classes.lists} key={item._id}>
                <h2 className={classes.taskName}>{item.todo}</h2>
                <div>
                  <button className={classes.buttons}>Complete</button>
                  <button className={classes.buttons}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Tasks;

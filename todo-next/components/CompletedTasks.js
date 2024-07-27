"use client";
import React from "react";
import classes from "./Tasks.module.css";

export const CompletedTasks = (props) => {
  return (
    <div className={classes.container}>
      <div>
        <h1 className={classes.headingTask}>Completed Tasks</h1>
      </div>
      <div className={classes.taskContainer}>
        {props.completedTask.length === 0 ? (
          <p className={classes.data}> No ToDo to preview</p>
        ) : (
          <ul>
            {props?.completedTask?.map((item) => {
              return (
                <li className={classes.lists} key={item._id}>
                  <h2 className={classes.taskName}>{item.todo}</h2>
                  <span className={classes.taskName}>{item.done && "✅"}</span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

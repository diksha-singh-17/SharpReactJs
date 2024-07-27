"use client";
import React from "react";
import classes from "./Tasks.module.css";
const Tasks = (props) => {
  const changeStatusHandler = (item) => {
    props.onStatusChange(item);
  };

  const deleteTodoHandler = (item) => {
    props.onDeleteTodo(item);
  };

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
                <span className={classes.taskName}>{item.done && "✅"}</span>
                <div>
                  <button
                    className={classes.buttons}
                    onClick={() => changeStatusHandler(item)}
                  >
                    Complete
                  </button>
                  <button
                    className={classes.buttons}
                    onClick={() => deleteTodoHandler(item)}
                  >
                    Delete
                  </button>
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

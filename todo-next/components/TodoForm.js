"use client";
import React, { useRef } from "react";
import classes from "./TodoForm.module.css";
const TodoForm = () => {
  const todo = useRef();
  const addTodoHandler = () => {
    const newTodo = todo.current.value;
    console.log(newTodo);
  };
  return (
    <div className={classes.container}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="What to do?"
          ref={todo}
          className={classes.inputToDo}
        />
        <button onSubmit={addTodoHandler} className={classes.addButton}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;

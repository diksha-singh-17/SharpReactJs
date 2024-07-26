"use client";
import React, { useRef } from "react";
import classes from "./TodoForm.module.css";
function TodoForm(props) {
  const todo = useRef();

  const addTodoHandler = (event) => {
    event.preventDefault();
    const newTodo = todo.current.value;
    console.log(newTodo);
    const todoData = {
      todo: newTodo,
      done: false,
    };
    props.onAddTodo(todoData);
  };
  return (
    <div className={classes.container}>
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="What to do?"
          ref={todo}
          className={classes.inputToDo}
        />
        <button className={classes.addButton}>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;

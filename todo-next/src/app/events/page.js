"use client";
import React from "react";
import TodoForm from "../../../components/TodoForm";
import Layout from "../../../layout/Layout";

async function fetchTodoHandler(todoData) {
  try {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(todoData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data, "data from post");
  } catch (error) {
    console.error("Error:", error);
  }
}

const Page = () => {
  return (
    <Layout>
      <TodoForm onAddTodo={fetchTodoHandler} />
    </Layout>
  );
};

export default Page;

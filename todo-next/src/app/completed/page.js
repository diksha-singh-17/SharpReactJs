"use client";
import React from "react";
import Layout from "../../../layout/Layout";
import { CompletedTasks } from "../../../components/CompletedTasks";

const fetchCompletedTodoHandler = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const filteredTodo = data?.result?.filter((item) => item.done === true);

    return filteredTodo;
  } catch (error) {
    console.error("Error:", error);
  }
};
const page = async () => {
  const completedTasks = await fetchCompletedTodoHandler();
  return (
    <div>
      <Layout>
        <CompletedTasks completedTask={completedTasks} />
      </Layout>
    </div>
  );
};

export default page;

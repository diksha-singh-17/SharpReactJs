"use client";
import Layout from "../../layout/Layout";
import Tasks from "../../components/Tasks";

const fetchTodoHandler = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error:", error);
  }
};

const statusUpdateHandler = async (item) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/posts/${item._id}`,
      {
        method: "PUT",
        body: JSON.stringify({ done: !item.done }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default async function Home() {
  const fetchedData = await fetchTodoHandler();
  const statusUpdate = await statusUpdateHandler();
  return (
    <>
      <Layout>
        <Tasks todoData={fetchedData} onStatusChange={statusUpdateHandler} />
      </Layout>
    </>
  );
}

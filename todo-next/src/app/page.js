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
export default async function Home() {
  const fetchedData = await fetchTodoHandler();
  console.log("checking data......", fetchedData);
  return (
    <>
      <Layout>
        <Tasks todoData={fetchedData} />
      </Layout>
    </>
  );
}

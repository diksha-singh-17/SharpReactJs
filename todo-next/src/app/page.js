import Image from "next/image";
import Layout from "../../layout/Layout";
import TodoForm from "../../components/TodoForm";
import Tasks from "../../components/Tasks";

export default function Home() {
  return (
    <>
      <Layout>
        <TodoForm />
        <Tasks />
      </Layout>
    </>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";

const DUMMY = [
  {
    id: 1,
    title: "Monument",
    image:
      "https://assets.zeezest.com/blogs/PROD_Banner%20monuments_1687722103189.png",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 2,
    title: "Monument1",
    image:
      "https://assets.zeezest.com/blogs/PROD_Banner%20monuments_1687722103189.png",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 3,
    title: "Monument3",
    image:
      "https://assets.zeezest.com/blogs/PROD_Banner%20monuments_1687722103189.png",
    address:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
];

const getMeetupHandler = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();
    console.log(data, "Fetched Data");
    if (data.success) {
      return data.result;
    }
    throw new Error("Data fetch was not successful");
  } catch (error) {
    console.error("Error fetching meetups:", error);
  }
};
export default async function Home(props) {
  const meetups = await getMeetupHandler();
  console.log(meetups, "meetupsssssssss");
  return (
    <Layout>
      <MeetupList meetups={meetups} />
    </Layout>
  );
}

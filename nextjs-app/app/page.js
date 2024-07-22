import Image from "next/image";
import styles from "./page.module.css";
import MeetupList from "@/components/meetups/MeetupList";
import Layout from "@/components/layout/Layout";

export default function Home() {
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
  ];
  return (
    <Layout>
      <MeetupList meetups={DUMMY} />
    </Layout>
  );
}

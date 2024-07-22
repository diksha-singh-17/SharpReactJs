import Layout from "@/components/layout/Layout";
import MeetupDetails from "@/components/meetups/MeetupDetails";
import React from "react";

const page = () => {
  return (
    <Layout>
      <MeetupDetails
        image="https://assets.zeezest.com/blogs/PROD_Banner%20monuments_1687722103189.png"
        title="Monument"
        address="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
      />
    </Layout>
  );
};

export default page;

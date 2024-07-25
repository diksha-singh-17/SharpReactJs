import Layout from "@/components/layout/Layout";
import MeetupDetails from "@/components/meetups/MeetupDetails";
import React from "react";

const getMeetupHandler = async (id) => {
  try {
    const response = await fetch("http://localhost:3000/api/posts");
    const data = await response.json();
    console.log(data, "Fetched Data");
    if (data.success) {
      const filteredData = data?.result?.filter((item) => item._id === id);
      return filteredData;
    }
    throw new Error("Data fetch was not successful");
  } catch (error) {
    console.error("Error fetching meetups:", error);
  }
};

const page = async ({ params }) => {
  const meetupId = params.meetupId;
  const meetup = await getMeetupHandler(meetupId);
  return (
    <Layout>
      {meetup.map((item) => {
        return (
          <MeetupDetails
            image={item.image}
            title={item.title}
            address={item.address}
          />
        );
      })}
    </Layout>
  );
};

export default page;

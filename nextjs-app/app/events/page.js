"use client";
import Layout from "@/components/layout/Layout";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const page = () => {
  async function addMeetupHandler(meetupData) {
    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Layout>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Layout>
    </div>
  );
};

export default page;

"use client";
import Layout from "@/components/layout/Layout";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const page = () => {
  function addMeetupHandler(meetupData) {
    console.log(meetupData);
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

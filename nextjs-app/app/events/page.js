import Layout from "@/components/layout/Layout";
import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import React from "react";

const page = () => {
  return (
    <div>
      <Layout>
        <NewMeetupForm />
      </Layout>
    </div>
  );
};

export default page;

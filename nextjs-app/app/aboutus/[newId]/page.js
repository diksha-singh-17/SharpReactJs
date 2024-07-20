import React from "react";
// import { useRouter } from "next/router";

const Detailpage = ({ params }) => {
  // const router = useRouter();

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const id = params.newId;
  console.log(params.newId, "idddddddddddddd", details[id]);
  return (
    <>
      {!details[id] ? (
        "Developer doesn't exist"
      ) : (
        <div>
          {details[id].name}-{details[id].role}
        </div>
      )}
    </>
  );
};

export default Detailpage;

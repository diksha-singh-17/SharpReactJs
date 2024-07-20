import React from "react";

const Detailpage = ({ params }) => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const id = params.newId;
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

import Link from "next/link";
import React from "react";

const page = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <div>
      <h1>Details</h1>
      <ul>
        {details.map((detail) => (
          <li key={detail.id}>
            <Link href={`aboutus/${detail.id - 1}`}>{detail.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;

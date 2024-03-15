import { useState, useEffect } from "react";
const Child = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      console.log("setinterval with ", id);
    }, 1000);
    console.log("succesfully mounted the counter component with", id);
    return () => {
      // cleanup : will unload componet before moving to parent or other component (cleanup will be done before calling another setinterval with new id)
      clearInterval(id);
      console.log(`cleaned up ${id}`);
    };
  });
  return (
    <div>
      {console.log("Component render")}
      <p>Count:{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};
export default Child;

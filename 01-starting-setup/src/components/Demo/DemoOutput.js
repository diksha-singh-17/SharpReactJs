import React from "react";

const DemoOutput = (props) => {
  return (
    <div>
      {" "}
      {console.log("demo output")}
      {props.show ? <p>In new para</p> : ""}
    </div>
  );
};

export default React.memo(DemoOutput);

import React from "react";

const ChildComponent = (props) => {

// This is the HOC
function withGreeting(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div>
        <h2>Hello, welcome to the app!</h2>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withGreeting;

  return (
    <>
      <div>ChildComponent{props.message}</div>
      <button
        onClick={() => {
          sendDataToParent("data from child");
        }}
      >
        Add
      </button>
    </>
  );
};

export default ChildComponent;

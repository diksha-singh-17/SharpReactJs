import React from "react";
import HelloWorld from "./HelloWorld";
import withGreeting from "./withGreeting";

const WrappedComponent = withGreeting(HelloWorld);

export default WrappedComponent;

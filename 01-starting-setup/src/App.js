import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);
  const onClickParaHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevshowParagraph) => !prevshowParagraph);
    }
  }, [allowToggle]);
  const allowToggleHandler = () => {
    setAllowToggle(true);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>AllowToggle</Button>
      <Button onClick={onClickParaHandler}>InNewpara</Button>
    </div>
  );
}

export default App;

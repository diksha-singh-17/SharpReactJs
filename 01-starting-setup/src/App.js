import React, { useCallback, useState, useMemo } from "react";

import "./App.css";
// import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";

function App() {
  // const [showParagraph, setShowParagraph] = useState(false);
  // const [allowToggle, setAllowToggle] = useState(false);
  const [listTitle, setListTitle] = useState("My List");
  const [buttonTitle, setButtonTitle] = useState(false);

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const changeButtonHandler = useCallback(() => {
    setButtonTitle((prevbuttonTitle) => !prevbuttonTitle);
  }, []);

  // const onClickParaHandler = useCallback(() => {
  //   if (allowToggle) {
  //     setShowParagraph((prevshowParagraph) => !prevshowParagraph);
  //   }
  // }, [allowToggle]);
  // const allowToggleHandler = () => {
  //   setAllowToggle(true);
  // };
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  return (
    <div className="app">
      {/* <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>AllowToggle</Button>
      <Button onClick={onClickParaHandler}>InNewpara</Button> */}

      <DemoList title={listTitle} items={listItems} toggle={buttonTitle} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      {buttonTitle ? (
        <Button onClick={changeButtonHandler}>Descending Order</Button>
      ) : (
        <Button onClick={changeButtonHandler}>Ascending Order</Button>
      )}
    </div>
  );
}

export default App;

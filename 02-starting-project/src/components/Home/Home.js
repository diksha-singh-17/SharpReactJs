import React from "react";
import { useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import AuthContext from "../store/AuthContext";
import Button from "../UI/Button/Button";
const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button OnClick={authCtx.onLogout}>LOgOut</Button>
    </Card>
  );
};

export default Home;

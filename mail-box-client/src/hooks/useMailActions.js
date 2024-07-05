import React from "react";

import { useNavigate } from "react-router-dom";

const useMailActions = () => {
  const navigate = useNavigate();
  const composeEmailHandler = () => {
    navigate("/body");
  };

  const messageHandler = (id) => {
    navigate(`/message/${id}`);
  };

  const deleteMailHandler = (id) => {
    fetch(
      `https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox/${id}.json`,
      {
        method: "DELETE",
      }
    );
    console.log("successfully deleted mail!!");
  };
  return { composeEmailHandler, messageHandler, deleteMailHandler };
};

export default useMailActions;

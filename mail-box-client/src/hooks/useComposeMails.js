import React, { useState, useRef } from "react";
import draftToHtml from "draftjs-to-html";
import { useNavigate } from "react-router-dom";
import { EditorState, convertToRaw } from "draft-js";

const useComposeMails = () => {
  const email = useRef();
  const subject = useRef();
  const [bodyContent, setBodyContent] = useState("");
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const emailHandler = () => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = bodyContent;
    const plainText = tempDiv.innerText;

    // Fetch existing data
    fetch(
      "https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox.json"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data);

        // Check if data exists and is an array
        const existingData = data && Array.isArray(data) ? data : [];
        const currentTime = new Date().toLocaleTimeString();
        // Append new data to the existing array
        const newData = [
          ...existingData,
          {
            email: email.current.value,
            subject: subject.current.value,
            body: plainText,
            newTime: currentTime,
            id: email.current.value,
            read: false,
          },
        ];

        // Send updated data back to the server
        return fetch(
          "https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          }
        );
      })
      .then((res) => res.json())
      .then((data) => console.log("updated data", data))
      .catch((error) => console.log(error));
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const bodyValue = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setBodyContent(bodyValue);
  };

  const inboxHandler = () => {
    navigate("/");
  };

  const sentMessagesHandler = () => {
    navigate("/sentMessages");
  };

  return {
    email,
    subject,
    emailHandler,
    onEditorStateChange,
    inboxHandler,
    sentMessagesHandler,
    editorState,
  };
};

export default useComposeMails;

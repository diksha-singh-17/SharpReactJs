import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Button from "react-bootstrap/esm/Button";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

const Body = () => {
  const email = useRef();
  const subject = useRef();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [bodyContent, setBodyContent] = useState("");

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
          },
        ];

        // Send updated data back to the server
        return fetch(
          "https://nice-theater-338718-default-rtdb.firebaseio.com/mailBox.json",
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
          }
        );
      })
      .then((res) => res.json())
      .then((data) => console.log("updated data"))
      .catch((error) => console.log(error));
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const bodyValue = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setBodyContent(bodyValue);
  };

  return (
    <div>
      <h1>Welcome!! to mail box client.</h1>
      <h2>Here you can send and receive mails.</h2>

      <Card style={{ width: "60rem" }}>
        <Card.Body>
          <Form>
            <Card.Title>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Email"
                  type="text"
                  ref={email}
                  className="mb-3 rounded"
                />
              </InputGroup>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="subject"
                  type="text"
                  ref={subject}
                  className="mb-3 rounded"
                />
              </InputGroup>
            </Card.Subtitle>
            <Card.Text>
              <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
              />
            </Card.Text>
            <Button variant="success" className="px-4" onClick={emailHandler}>
              Send
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Body;

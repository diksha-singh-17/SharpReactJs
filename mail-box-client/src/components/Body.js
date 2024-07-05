import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/esm/InputGroup";
import Button from "react-bootstrap/esm/Button";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import useComposeMails from "../hooks/useComposeMails";

const Body = () => {
  const {
    email,
    subject,
    emailHandler,
    onEditorStateChange,
    inboxHandler,
    sentMessagesHandler,
    editorState,
  } = useComposeMails();

  return (
    <div>
      <h1>Welcome!! to mail box client.</h1>
      <h2>Here you can send and receive mails.</h2>
      <div className="">
        <div className="m-2 ">
          <Button variant="info" className="px-4 m-2" onClick={inboxHandler}>
            Inbox
          </Button>
          <Button
            variant="info"
            className="px-4 "
            onClick={sentMessagesHandler}
          >
            Sent
          </Button>
        </div>
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
    </div>
  );
};

export default Body;

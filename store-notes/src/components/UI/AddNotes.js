import { useState, useRef, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AuthContext from "../../store/AuthContext";

const AddNotes = () => {
  const [show, setShow] = useState(false);
  const inputRef = useRef();
  const descRef = useRef();
  const authCntxt = useContext(AuthContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addNotesHandler = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    const descValue = descRef.current.value;
    console.log(inputValue, descValue);

    authCntxt.addNote({
      id: Math.random().toString(),
      title: inputValue,
      desc: descValue,
    });
    console.log(authCntxt);
  };
  return (
    <div>
      <Button variant="secondary" onClick={handleShow}>
        Add New Note
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW NOTE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3 ">
            Note Title:{" "}
            <Form.Control
              ref={inputRef}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            Note Desc:{" "}
            <Form.Control
              ref={descRef}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addNotesHandler}>
            Add to Book
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddNotes;

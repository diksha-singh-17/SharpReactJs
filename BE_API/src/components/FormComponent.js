import "../App.css";
import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const FormComponent = () => {
  const title = useRef();
  const text = useRef();
  const releasedate = useRef();

  const addMoviesHandler = () => {
    const newMoviesObj = {
      Title: title.current.value,
      Text: text.current.value,
      releaseDate: releasedate.current.value,
    };
    console.log(newMoviesObj);
  };
  return (
    <div>
      <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
        <Form.Control
          ref={title}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup size="lg" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">OpeningText</InputGroup.Text>
        <Form.Control
          ref={text}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <InputGroup size="" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">
          Release Date
        </InputGroup.Text>
        <Form.Control
          ref={releasedate}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <br />
      <button onClick={addMoviesHandler}>Add Movies</button>
    </div>
  );
};

export default FormComponent;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AddNotes from "./components/UI/AddNotes";

function App() {
  return (
    <div className="App">
      <h1>NoteBook</h1>
      <div className="w-25 ">
        <InputGroup className="mb-3 d-flex justify-content-center align-items-center">
          <InputGroup.Text>Search Notes</InputGroup.Text>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>

      <p>Total Items:{0}</p>
      <p>Total Showing:{0}</p>
      <AddNotes />
    </div>
  );
}

export default App;

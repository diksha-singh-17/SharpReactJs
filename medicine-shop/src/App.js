import "./App.css";
import { useRef, useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AuthContext from "./store/AuthContext";
import ShowProducts from "./components/ShowProducts";
import { CartContextProvider } from "./store/CartContext";
import CartItems from "./components/CartItems";

function App() {
  const inputRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();
  const authCntxt = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  const addItemsHandler = (e) => {
    e.preventDefault();
    authCntxt.addProduct({
      id: Math.random().toString(),
      name: inputRef.current.value,
      desc: descRef.current.value,
      price: priceRef.current.value,
      quantity: Number(quantityRef.current.value),
    });
    console.log(authCntxt);

    fetch(
      "https://crudcrud.com/api/774032bf34ee44339b07663262dcd6f6/medicine-shop"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("data from get", data);
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <CartContextProvider>
      <div className="App">
        <h1>Medicine Shop</h1>
        <div className="d-flex justify-content-end m-4">
          <CartItems />
        </div>

        <div className="m-4 d-flex justify-content-start flex-column align-items-center ">
          MedicineName:{" "}
          <InputGroup className="mb-3 w-50">
            <Form.Control
              ref={inputRef}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          Description:{" "}
          <InputGroup className="mb-3 w-50">
            <Form.Control
              ref={descRef}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          Price:{" "}
          <InputGroup className="mb-3 w-25">
            <Form.Control
              ref={priceRef}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          Quantity Available:{" "}
          <InputGroup className="mb-3 w-25">
            <Form.Control
              ref={quantityRef}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
          <Button variant="secondary" onClick={addItemsHandler}>
            Add Product
          </Button>
        </div>
        <ShowProducts products={products} />
      </div>
    </CartContextProvider>
  );
}

export default App;

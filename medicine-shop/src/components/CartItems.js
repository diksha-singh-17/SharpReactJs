import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CartContext from "../store/CartContext";

const CartItems = () => {
  const [show, setShow] = useState(false);

  const cartCntxt = useContext(CartContext);
  const length = cartCntxt.items.length;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>
      <span>{length}</span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartCntxt.items.map((item) => {
            return (
              <div
                key={item.id}
                className="d-flex justify-content-between m-2 p-2"
              >
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Purchase</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartItems;

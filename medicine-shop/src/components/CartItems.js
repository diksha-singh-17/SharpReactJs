import React, { useState, useContext, useEffect } from "react";
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
      {console.log(cartCntxt.items)}
      <div className="tw-flex tw-justify-end tw-p-2">
        <Button
          variant="primary"
          onClick={handleShow}
          className="tw-rounded-full tw-px-4 tw-p-2 hover:tw-cursor-pointer tw-border-orange-200"
        >
          Cart🛒
        </Button>
        <span className="tw-text-white">{length}</span>
      </div>

      <Modal className="absolute" show={show} onHide={handleClose}>
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

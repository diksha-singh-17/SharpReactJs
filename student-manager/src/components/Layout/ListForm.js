import React, { useContext, useRef } from "react";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
const ListForm = (props) => {
  const name = useRef();
  const phone = useRef();
  const address = useRef();

  const modalCntxt = useContext(CartContext);
  const addStudentHandler = (e) => {
    e.preventDefault();

    console.log(name.current.value);
    modalCntxt.addItem({
      id: Math.random().toString(),
      name: name.current.value,
      phone: phone.current.value,
      address: address.current.value,
    });
    console.log(modalCntxt);
    name.current.value = "";
    phone.current.value = "";
    address.current.value = "";
  };
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <form onSubmit={props.handleFormSubmit}>
        <input type="text" name="name" placeholder="Name" ref={name} />
        <br />
        <input type="text" name="mobile" placeholder="Mobile No." ref={phone} />
        <br />
        <input
          type="text"
          name="address"
          placeholder=" Address"
          ref={address}
        />
        <br />
        <button onClick={addStudentHandler}>Add</button>
        <button onClick={props.onCloseCart}>Close</button>
      </form>
    </Modal>
  );
};

export default ListForm;

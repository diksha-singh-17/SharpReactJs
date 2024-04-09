import React, { useContext, useRef } from "react";
import classes from "./ListForm.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
const ListForm = (props) => {
  const name = useRef();
  const phone = useRef();
  const address = useRef();

  const modalCntxt = useContext(CartContext);
  const addStudentHandler = (e) => {
    e.preventDefault();

    modalCntxt.addItem({
      id: Math.random().toString(),
      name: name.current.value,
      phone: phone.current.value,
      address: address.current.value,
    });
    name.current.value = " ";
    phone.current.value = " ";
    address.current.value = " ";
  };
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <form onSubmit={props.handleFormSubmit} className={classes.formItems}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          ref={name}
          id="item-title"
        />
        <br />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile No."
          ref={phone}
          id="item-phone"
        />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          ref={address}
          id="item-address"
        />
        <br />
        <div>
          <button className={classes.button} onClick={addStudentHandler}>
            Add
          </button>
          <button className={classes.button} onClick={props.onCloseCart}>
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ListForm;

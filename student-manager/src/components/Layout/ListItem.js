import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import classes from "./ListItem.module.css";
const ListItem = (props) => {
  const modalCntxt = useContext(CartContext);

  function onCloseModal(index) {
    props.onCloseCart();
    let itemToEdit = modalCntxt.items[index];
    setTimeout(() => {
      if (modalCntxt.items.length > 0) {
        document.getElementById("item-title").value = itemToEdit.name;
        document.getElementById("item-phone").value = itemToEdit.phone;
        document.getElementById("item-address").value = itemToEdit.address;
      }
    }, 100);
    modalCntxt.deleteItem(itemToEdit.id);
  }
  return (
    <div className={classes.container}>
      <h1>All Students:</h1>
      <ul className={classes.listItem}>
        {modalCntxt.items.map((item, index) => {
          return (
            <li key={item.id} id={item.id}>
              {item.name} - {item.phone}-{item.address}
              <button
                className={classes.button}
                onClick={() => onCloseModal(index)}
              >
                Edit
              </button>
              <button
                className={classes.button}
                onClick={() => modalCntxt.deleteItem(item.id)}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListItem;

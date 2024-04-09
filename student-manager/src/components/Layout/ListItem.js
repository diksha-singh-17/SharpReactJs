import React, { useContext } from "react";
import CartContext from "../../store/CartContext";

const ListItem = (props) => {
  const modalCntxt = useContext(CartContext);
  return (
    <>
      <ul>
        {modalCntxt.items.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              {item.name} - {item.phone}-{item.address}
              <button onClick={props.onCloseCart}>Edit</button>
              <button onClick={() => modalCntxt.deleteItem(item.id)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ListItem;

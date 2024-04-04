import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCntx = useContext(CartContext);
  const hasItems = cartCntx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCntx.deleteItem(id);
  };

  const cartItemAddHandler = (item) => {};

  const amount = cartCntx.items.reduce((currNum, item) => {
    return (currNum + item.price) * item.quantity;
  }, 0);
  const fixedAmount = `$${amount.toFixed(2)}`;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCntx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{fixedAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button__alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;

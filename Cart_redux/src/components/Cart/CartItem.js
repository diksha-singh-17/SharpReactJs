import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { addItemToCart, removeFromCart } from "../../store/cartSlice";

const CartItem = (props) => {
  const { id, name, quantity, total, price } = props.item;
  const dispatch = useDispatch();

  const increaseQuantityHandler = () => {
    dispatch(addItemToCart({ id, name, price }));
  };
  const decreaseQuantityHandler = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;

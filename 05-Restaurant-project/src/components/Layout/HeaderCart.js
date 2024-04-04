import CartContext from "../../store/CartContext";
import classes from "./HeaderCart.module.css";
import { useContext } from "react";
const HeaderCart = (props) => {
  const cartCntx = useContext(CartContext);
  // const numberOfCartItems = cartCntx.items.reduce((currNumber, item) => {
  //   return currNumber + Number(item.quantity);
  // }, 0);
  const numberOfCartItems = cartCntx.items.length;
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>🛒</span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};
export default HeaderCart;

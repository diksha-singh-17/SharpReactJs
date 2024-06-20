import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleCart } from "../../store/uiSlice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

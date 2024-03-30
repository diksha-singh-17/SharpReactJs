import classes from "./HeaderCart.module.css";
const HeaderCart = (props) => {
  return (
    <>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>🛒</span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </>
  );
};
export default HeaderCart;

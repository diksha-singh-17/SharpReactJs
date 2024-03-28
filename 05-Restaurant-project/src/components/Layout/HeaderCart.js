import classes from "./HeaderCart.module.css";
const HeaderCart = () => {
  return (
    <>
      <button className={classes.button}>
        <span className={classes.icon}>🛒</span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>
      </button>
    </>
  );
};
export default HeaderCart;

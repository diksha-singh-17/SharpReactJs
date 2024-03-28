import { IMAGE_URL } from "../Assets/003 meals.jpg-File";
import classes from "./Header.module.css";
import HeaderCart from "./HeaderCart";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h3>ReactMeals</h3>
        <HeaderCart />
      </header>
      <div className={classes["main-image"]}>
        <img src={IMAGE_URL} alt="Nothing to show" />
      </div>
    </>
  );
};

export default Header;

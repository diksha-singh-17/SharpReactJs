import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { addItemToCart } from "../../store/cartSlice";

const ProductItem = (props) => {
  const { id, name, price, description, quantity } = props;
  const dispatch = useDispatch();

  const handleAddToCartItem = () => {
    dispatch(
      addItemToCart({
        id,
        price,
        name,
        quantity,
        description,
      })
    );
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCartItem}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;

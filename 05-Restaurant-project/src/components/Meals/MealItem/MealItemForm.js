import { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/CartContext";
const MealItemForm = (props) => {
  const cartcntx = useContext(CartContext);
  const addItemCartHandler = (e) => {
    e.preventDefault();
    const quantity = Number(
      document.getElementById("amount_" + props.id).value
    );
    const existingCartItemsIndex = cartcntx.items.findIndex(
      (item) => item.id === props.id
    );

    if (existingCartItemsIndex >= 0) {
      //  only add the items once in the cart if it's more than once just increase the quantity
      let incrementAmount = parseInt(quantity) || 1;
      // add to existing amount
      cartcntx.items[existingCartItemsIndex].quantity += incrementAmount;
    } else {
      // create a new object for each meal and push into array
      cartcntx.addItem({ ...props.item, quantity: quantity });
    }
  };
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <div>
        <button onClick={addItemCartHandler}>+ Add</button>
      </div>
    </form>
  );
};
export default MealItemForm;

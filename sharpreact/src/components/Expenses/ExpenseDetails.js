import { useState } from "react";
const ExpenseDetails = (props) => {
  const [expense, setExpense] = useState(props.amount);
  const addHandler = () => {
    setExpense("100");
  };
  return (
    <div>
      <h4>
        {props.title}-{props.location}-${props.amount}
        <button onClick={addHandler}>Add</button>
      </h4>
    </div>
  );
};
export default ExpenseDetails;

import "./ExpenseItem.css";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("updated");
  };
  return (
    <div className="item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={title}
        amount={props.amount}
        location={props.location}
      />
      <button className="btn" onClick={clickHandler}>
        Delete Expense
      </button>
    </div>
  );
};
export default ExpenseItem;

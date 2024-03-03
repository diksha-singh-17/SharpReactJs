import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked");
  };
  return (
    <div className="item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
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

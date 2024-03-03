import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
function ExpenseItem(props) {
  return (
    <div>
      <div className="item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails
          title={props.title}
          amount={props.amount}
          location={props.location}
        />
      </div>
    </div>
  );
}
export default ExpenseItem;

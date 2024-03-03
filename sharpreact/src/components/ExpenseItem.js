import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <div>
      <div className="item">
        <h4>
          {props.date}-{props.title}-${props.amount}-{props.location}
        </h4>
      </div>
    </div>
  );
}
export default ExpenseItem;

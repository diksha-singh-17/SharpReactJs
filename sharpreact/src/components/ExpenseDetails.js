function ExpenseDetails(props) {
  return (
    <div>
      <h4>
        {props.title}-${props.amount}-{props.location}
      </h4>
    </div>
  );
}
export default ExpenseDetails;

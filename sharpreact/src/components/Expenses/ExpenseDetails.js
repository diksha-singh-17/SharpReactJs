const ExpenseDetails = (props) => {
  return (
    <div>
      <h4>
        {props.title}-${props.amount}
      </h4>
    </div>
  );
};
export default ExpenseDetails;

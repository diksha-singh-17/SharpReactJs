import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h4>No Expense Found</h4>;
  }
  if (props.item.length === 1) {
    return props.item.map((it) => (
      <>
        <ExpenseItem
          key={it.id}
          title={it.title}
          amount={it.amount}
          date={it.date}
        />
        <h4>Only single Expense here. Please add more...</h4>
      </>
    ));
  }
  return (
    <ul>
      {props.item.map((i) => (
        <ExpenseItem
          key={i.id}
          title={i.title}
          amount={i.amount}
          date={i.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;

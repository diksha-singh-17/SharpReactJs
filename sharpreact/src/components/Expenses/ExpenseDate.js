const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleDateString("en-us", { day: "2-digit" });
  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{date}</div>
    </div>
  );
};
export default ExpenseDate;

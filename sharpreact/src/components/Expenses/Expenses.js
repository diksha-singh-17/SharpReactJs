import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <h4>No Expense Found</h4>;
  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((item, index) => (
      <ExpenseItem
        key={index}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
};
export default Expenses;

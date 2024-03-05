import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((item, index) => {
          return (
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
              // location={item.location}
            />
          );
        })}
      </Card>
    </div>
  );
};
export default Expenses;

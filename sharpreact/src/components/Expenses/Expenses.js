import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  const expense = [
    {
      amount: 350,
      title: "Shopping",
      date: new Date(2021, 9, 9),
      location: "canada",
    },
    {
      amount: 2350,
      title: "Travel",
      date: new Date(2021, 8, 17),
      location: "canada",
    },
    {
      amount: 7350,
      title: "Movies",
      date: new Date(2025, 9, 23),
      location: "Mexico",
    },
    {
      amount: 1550,
      title: "Grocery",
      date: new Date(2021, 4, 12),
      location: "Bristol",
    },
  ];
  return (
    <div>
      <Card>
        {expense.push({
          amount: parseInt(props.newExpense.amount, 10),
          title: props.newExpense.title,
          date: new Date(props.newExpense.date),
        })}

        {expense.map((item, index) => {
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

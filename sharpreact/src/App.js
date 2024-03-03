import "./App.css";
import "./components/ExpenseItem.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      amount: 350,
      title: "Shopping",
      date: "2021-09-07",
      location: "canada",
    },
    {
      amount: 2350,
      title: "Travel",
      date: "2021-8-7",
      location: "canada",
    },
    {
      amount: 7350,
      title: "Movies",
      date: "2025-09-07",
      location: "Mexico",
    },
    {
      amount: 1550,
      title: "Grocery",
      date: "2021-04-07",
      location: "Bristol",
    },
  ];
  return (
    <div>
      <div className="header">Expense Item!</div>
      {expense.map((item, index) => {
        return (
          <ExpenseItem
            title={item.title}
            amount={expense[index].amount}
            date={expense[index].date}
            location={expense[index].location}
          />
        );
      })}
    </div>
  );
}

export default App;

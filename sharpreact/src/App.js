import "./App.css";
import "./components/ExpenseItem.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    {
      amount: 350,
      title: "Shopping",
      date: new Date("2021-09-09"),
      location: "canada",
    },
    {
      amount: 2350,
      title: "Travel",
      date: new Date("2021-8-17"),
      location: "canada",
    },
    {
      amount: 7350,
      title: "Movies",
      date: new Date("2025-09-23"),
      location: "Mexico",
    },
    {
      amount: 1550,
      title: "Grocery",
      date: new Date("2021-04-12"),
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

import { useState } from "react";
import "./App.css";
import "./components/Expenses/ExpenseItem.css";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/NewExpense/Form";

const DUMMY_EXPENSES = [
  {
    id: "el1",
    amount: 350,
    title: "Shopping",
    date: new Date(2021, 9, 9),
    location: "canada",
  },
  {
    id: "el2",
    amount: 2350,
    title: "Travel",
    date: new Date(2021, 8, 17),
    location: "canada",
  },
  {
    id: "el3",
    amount: 7350,
    title: "Movies",
    date: new Date(2024, 9, 23),
    location: "Mexico",
  },
  {
    id: "el4",
    amount: 1550,
    title: "Grocery",
    date: new Date(2021, 4, 12),
    location: "Bristol",
  },
];
const App = () => {
  const [newExpense, setnewExpense] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setnewExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };
  return (
    <div>
      <h1 className="header">Expense Item!</h1>
      <Form onAddExpense={addExpenseHandler} />
      <Expenses items={newExpense} />
    </div>
  );
};

export default App;

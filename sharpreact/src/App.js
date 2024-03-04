import { useState } from "react";
import "./App.css";
import "./components/Expenses/ExpenseItem.css";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/NewExpense/Form";
const App = () => {
  const [newExpense, setnewExpense] = useState("");
  const addExpenseHandler = (expense) => {
    setnewExpense(expense);
  };
  return (
    <div>
      <h1 className="header">Expense Item!</h1>
      <Form onAddExpense={addExpenseHandler} />
      <Expenses newExpense={newExpense} />
    </div>
  );
};

export default App;

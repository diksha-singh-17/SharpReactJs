import "./App.css";
import "./components/Expenses/ExpenseItem.css";
import Expenses from "./components/Expenses/Expenses";
import Form from "./components/NewExpense/Form";
const App = () => {
  return (
    <div>
      <h1 className="header">Expense Item!</h1>
      <Form />
      <Expenses />
    </div>
  );
};

export default App;

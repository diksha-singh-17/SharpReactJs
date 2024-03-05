import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./Form.css";
const Form = (props) => {
  const [ishide, setishide] = useState(true);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const changeStateHandler = () => {
    setishide(!ishide);
  };

  return (
    <div className="form__content">
      {ishide ? (
        <button className="btn-expense" onClick={changeStateHandler}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={changeStateHandler}
        />
      )}
    </div>
  );
};
export default Form;

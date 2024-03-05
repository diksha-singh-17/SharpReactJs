import { useState } from "react";
const ExpenseForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
    setEnteredDate(event.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userInputs = {
      title: enteredTitle,
      amount: parseInt(enteredAmount, 10),
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(userInputs);
    setEnteredAmount("");
    setEnteredTitle("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Expense Title :</label>
        <input
          type="text"
          onChange={titleChangeHandler}
          value={enteredTitle}
        ></input>
      </div>
      <div>
        <label>Expense Amount :</label>
        <input
          type="number"
          onChange={amountChangeHandler}
          value={enteredAmount}
        ></input>
      </div>
      <div>
        <label>Date :</label>
        <input
          type="date"
          onChange={dateChangeHandler}
          value={enteredDate}
        ></input>
      </div>
      <button type="submit" onClick={props.onCancel}>
        Cancel
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};
export default ExpenseForm;

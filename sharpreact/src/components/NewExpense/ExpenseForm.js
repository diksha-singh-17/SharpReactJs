import { useState } from "react";
const ExpenseForm = () => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userInput);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Expense Title :</label>
        <input type="text" onChange={titleChangeHandler}></input>
      </div>
      <div>
        <label>Expense Amount :</label>
        <input type="number" onChange={amountChangeHandler}></input>
      </div>
      <div>
        {" "}
        <label>Date :</label>
        <input type="date" onChange={dateChangeHandler}></input>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};
export default ExpenseForm;

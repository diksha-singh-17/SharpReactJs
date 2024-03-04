import { useState } from "react;";
const ExpenseForm = () => {
  const obj = {
    title: "",
    amount: "",
    date: "",
  };
  const titleChangeHandler = (event) => {
    obj.title = event.target.value;
    setEnteredtitle(event.target.value);
  };

  const amountChangeHandler = (e) => {
    obj.amount = e.target.value;
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    obj.date = e.target.value;
    setEnteredDate(e.target.value);
  };
  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(obj);
  };

  const [enteredTitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState();
  return (
    <form>
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

      <button type="submit" onClick={formSubmitHandler}>
        Submit
      </button>
    </form>
  );
};
export default ExpenseForm;

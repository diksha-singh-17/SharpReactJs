import React, { useEffect, useRef, useState } from "react";
import { DATABASE_URL } from "../utils/constants";

const Expenses = () => {
  const [expenseData, setExpenseData] = useState();
  const amount = useRef(null);
  const desc = useRef(null);
  const category = useRef(null);
  let url = DATABASE_URL + "expenses.json";

  const handleExpensesFormData = () => {
    console.log(desc.current.value, category.current.value);

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        amount: amount.current.value,
        desc: desc.current.value,
        category: category.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setExpenseData(data);
        if (data.error) {
          throw new Error(data.error.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        const filteredData = [];
        for (let key in data) {
          filteredData.unshift({
            ...data[key],
            id: key,
          });
          setExpenseData(filteredData);
        }
        if (data.error) {
          throw new Error(data.error.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <span className="text-pink-300 text-2xl shadow-md font-bold">
          Daily Expenses
        </span>
      </div>
      <div className="flex justify-center m-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col  justify-center items-center w-1/4 bg-pink-100 p-4 m-4 shadow-2xl"
        >
          <input
            type="number"
            placeholder="amount"
            className="m-4 p-2 rounded-lg"
            ref={amount}
          />
          <input
            type="text"
            placeholder="description"
            className="m-4 p-2 py-4 rounded-lg"
            ref={desc}
          />
          <select
            className="m-4 p-2 px-16  rounded-lg"
            placeholder="Select an option"
            ref={category}
          >
            <option value=""></option>
            <option value="petrol">Petrol</option>
            <option value="food">Food</option>
            <option value="salary">salary</option>
          </select>

          <div>
            <button
              className="bg-slate-600 hover:bg-slate-400 rounded-md text-white p-2 m-4 font-bold"
              onClick={handleExpensesFormData}
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
      <div>
        {expenseData?.map((expense) => {
          return (
            <div className="flex justify-center">
              <ul
                key={expense.id}
                className="flex font-bold text-xl text-slate-800  m-4 bg-gradient-to-r from-slate-600"
              >
                <li className="p-2 m-2">{expense.amount}</li>
                <li className="p-2 m-2">{expense.desc}</li>
                <li className="p-2 m-2">{expense.category}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Expenses;

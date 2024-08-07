import React, { useEffect, useRef, useState } from "react";
import { DATABASE_URL } from "../utils/constants";

import { useSelector, useDispatch } from "react-redux";
import { expenseActions } from "../store/ExpenseReducer";
import "../App.css";
import Premium from "./Premium";
import CheckPremium from "./CheckPremium";
const Expenses = () => {
  const [expenseData, setExpenseData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [id, setId] = useState(null);
  const [isPremium, setIsPremium] = useState(false);
  const [formData, setFormData] = useState(null);
  const dispatch = useDispatch();
  const [checkPremium, chekIsPremium] = useState(null);
  const expenseFromStore = useSelector((state) => state.expense.movie);
  const theme = useSelector((state) => state.auth.theme);

  const formRefs = {
    // id: useRef(null),
    amount: useRef(null),
    desc: useRef(null),
    category: useRef(null),
    // Add other refs as needed
  };

  let url = DATABASE_URL + "expenses.json";
  let res = false;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const filteredData = [];
        for (let key in data) {
          filteredData.unshift({
            ...data[key],
            id: key,
          });
        }

        setExpenseData(filteredData);
        dispatch(expenseActions.addExpense(filteredData));
        if (data.error) {
          throw new Error(data.error.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (formData) {
      if (isEditing) {
        const editURL =
          "https://nice-theater-338718-default-rtdb.firebaseio.com/expenses/" +
          id +
          ".json";
        fetch(editURL, {
          method: "PUT",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            const filteredData = [];
            for (let key in response) {
              filteredData.unshift({
                ...response[key],
                id: key,
              });
            }
            setExpenseData((prevItems) =>
              prevItems.map((item) =>
                item.id === filteredData.id ? response.data : item
              )
            );
            if (response.error) {
              throw new Error(response.error.message);
            }
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        if (
          formRefs.amount.current &&
          formRefs.desc.current &&
          formRefs.category.current
        ) {
          fetch(url, {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const filteredData = [];
              for (let key in data) {
                filteredData.unshift({
                  ...data[key],
                  id: key,
                });
              }
              console.log(data, "*********data raw");
              console.log(filteredData, "***************filter data");
              if (data.error) {
                throw new Error(data.error.message);
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    }
  }, [formData]);

  const handleExpensesFormData = () => {
    if (
      formRefs.amount.current &&
      formRefs.desc.current &&
      formRefs.category.current
    ) {
      const amountValue = Number(formRefs.amount.current.value);
      const newIsPremium = amountValue > 10000;

      setIsPremium(newIsPremium);

      //sum of all expenses
      let sum = 0;
      expenseFromStore?.map((item) => {
        return (sum = Number(item.amount) + sum);
      });
      chekIsPremium(sum);

      dispatch(expenseActions.addPremium(sum));

      // Set form data with the updated isPremium value
      setFormData({
        amount: formRefs.amount.current.value,
        desc: formRefs.desc.current.value,
        category: formRefs.category.current.value,
        premium: newIsPremium,
      });

      console.log(newIsPremium, "isprem");
    }
  };

  const deleteExpensesHandler = (id) => {
    const deleteURL =
      "https://nice-theater-338718-default-rtdb.firebaseio.com/expenses/" +
      id +
      ".json";
    fetch(deleteURL, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.info("Expense successfuly deleted");
        setExpenseData(data);
        if (data.error) {
          throw new Error(data.error.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const editExpenseHandler = (item) => {
    setIsEditing(true);
    setId(item.id);

    if (
      formRefs.amount.current &&
      formRefs.desc.current &&
      formRefs.category.current
    ) {
      formRefs.amount.current.value = item.amount;
      formRefs.desc.current.value = item.desc;
      formRefs.category.current.value = item.category;
    }
  };

  return (
    <div className={theme}>
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
            ref={formRefs.amount}
          />
          <input
            type="text"
            placeholder="description"
            className="m-4 p-2 py-4 rounded-lg"
            ref={formRefs.desc}
          />
          <select
            className="m-4 p-2 px-16  rounded-lg"
            placeholder="Select an option"
            ref={formRefs.category}
          >
            <option value=""></option>
            <option value="petrol">Petrol</option>
            <option value="food">Food</option>
            <option value="salary">salary</option>
            <option value="grocery">Grocery</option>
            <option value="others">Others</option>
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
        {(res = Number(checkPremium) > 10000)}
        {res && <CheckPremium />}

        <ul className="text-xl text-slate-800  m-4 bg-gradient-to-r from-slate-600">
          {expenseData?.map((expense) => {
            return (
              <React.Fragment>
                <li className="p-2 m-2 font-semibold" key={expense.id}>
                  {expense.amount} {expense.desc} {expense.category}
                  <button
                    className="p-2 m-2 bg-slate-800 text-white rounded-lg"
                    onClick={() => editExpenseHandler(expense)}
                  >
                    Edit Expense
                  </button>
                  <button
                    className="p-2 m-2 bg-red-600 text-white rounded-lg"
                    onClick={() => deleteExpensesHandler(expense.id)}
                  >
                    Delete Expense
                  </button>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Expenses;

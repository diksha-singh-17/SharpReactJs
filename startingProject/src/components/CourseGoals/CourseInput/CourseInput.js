import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isModalVisible, setModalVisibility] = useState(false);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const ageChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setAgeValue(event.target.value);
  };

  // Function to handle modal close
  const handleCloseModal = () => {
    setModalVisibility(false);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      setModalVisibility(true);
      return;
    }
    if (ageValue.trim().length === 0 || ageValue < 0) {
      setIsValid(false);
      setModalVisibility(true);
      return;
    }
    const obj = {
      input: enteredValue,
      age: parseInt(ageValue),
    };
    props.onAddGoal(obj);
  };

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className={`form-control ${!isValid ? "invalid" : ""}`}>
          <label>UserName:</label>
          <input type="text" onChange={goalInputChangeHandler} />
          <label>Age(Years) :</label>
          <input type="number" onChange={ageChangeHandler} />
        </div>
        <Button type="submit" checkValidity={isValid}>
          Add Goal
        </Button>
      </form>

      {isModalVisible && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#fff",
              padding: "20px",
              width: "450px",
              height: "150px",
              borderRadius: "8px",
            }}
          >
            {!isValid ? <p>Enter some values</p> : ""}
            <button
              className="close"
              style={{
                background: " #ac0e77",
                borderColor: "#ac0e77",
                boxShadow: " 0 0 8px rgba(0, 0, 0, 0.26)",
                border: "1px solid #8b005d",
                cursor: "pointer",
              }}
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseInput;

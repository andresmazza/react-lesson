import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: new Date(),
  });

  const getCurrentDate = () => {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  };

  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      title: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      amount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    let enteredDate =  new Date( event.target.value);
    console.log(enteredDate);
    setUserInput({
      ...userInput,
      date: enteredDate,
    });

    console.log(userInput);

    console.log('---------------->',event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    console.log("submitHandler");
    console.log(userInput);

    setUserInput({
      title: '',
      amount: '',
      date: new Date()
    });

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={getCurrentDate()}
            onChange={dateChangeHandler}
            value={userInput.date.getFullYear().toString()}
        
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

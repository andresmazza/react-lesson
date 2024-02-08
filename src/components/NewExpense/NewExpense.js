import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const getTimestampInSeconds = () => {
  return Math.floor(Date.now() / 1000);
};

const NewExpense = (props) => {
  const onSaveExpenseDatahandler = (enteredExpenseData) => {
    const expenseData = {
    id: getTimestampInSeconds(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDatahandler} />
    </div>
  );
};

export default NewExpense;

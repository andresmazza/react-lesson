import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { expensesStorage } from "./ExpensesStorage";
import Chart from "./components/Chart/Chart";
import ExpensesChart from "./components/Expenses/ExpesesChart";

const App = () => {
  const [year, setYear] = useState("");
  const [expenses, setExpenses] = useState(expensesStorage);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  const filterChangeYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onChangeFilter={filterChangeYearHandler}
        ></ExpensesFilter>
          
        <Expenses items={expenses} year={year} />
      </Card>
    </div>
  );
};

export default App;

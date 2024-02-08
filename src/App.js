import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import { expensesStorage } from "./ExpensesStorage";

const App = () => {
  const [year, setYear] = useState('');
  const [expenses, setExpenses] = useState(expensesStorage);

  
  const addExpenseHandler = (expense) => {
   // setExpenses([expense, ...expenses]);
    setExpenses((prevState)=>{
      return [expense, ...prevState];
    });
  };

  const filterChangeYearHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log('selectedYear:',selectedYear);
    // setExpenses((prevState)=>{
    //   return [expense, ...prevState];
    // });
  };



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>

      <Card className="expenses">
        <ExpensesFilter selected={year} onChangeFilter={filterChangeYearHandler}></ExpensesFilter>
        <p>Data for years 2019, 2020 & 2022 is hidden</p>
        <Expenses items={expenses} year={year}/>
      </Card>
    </div>
  );
};

export default App;

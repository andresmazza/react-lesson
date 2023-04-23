import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div>
      <Card classNmae="expenses">
        <ExpenseItem
          date={props.date}
          title={props.title}
          amount={props.amount}
        />
      </Card>
    </div>
  );
};

export default Expenses;

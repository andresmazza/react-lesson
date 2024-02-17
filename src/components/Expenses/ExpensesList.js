import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let { items } = props;
  let expensesContent = (
    <h2 className="expenses-list__fallback">Found no expenses.</h2>
  );

  if (items.length > 0) {
    expensesContent = items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  }

  return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;

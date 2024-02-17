import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";


const Expenses = (props) => {
  let { items } = props;
  const { year } = props;

  if (year) {

    items = items.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  }

  return (
    <Card className="expenses">
      <ExpensesList items={items}></ExpensesList>
    </Card>
  );
};

export default Expenses;

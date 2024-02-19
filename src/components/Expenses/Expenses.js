import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpesesChart";


const Expenses = (props) => {
  let { items } = props;
  const { year } = props;

  if (year) {

    items = items.filter((expense) => {
      return expense.date.getFullYear().toString() === year;
    });
  }

  return (
    <>
    <ExpensesChart expenses={items}></ExpensesChart>
    <Card className="expenses">
      <ExpensesList items={items}></ExpensesList>
    </Card>
    </>
  );
};

export default Expenses;

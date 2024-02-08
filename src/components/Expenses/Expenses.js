import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  let { items } = props;
  const { year } = props;

  if (year) {
    console.log("filter Year:", year);
    items = items.filter((expense) => {
      console.log("expense:", expense);

      return expense.date.getFullYear().toString() === year;
    });
  }
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <Card classNmae="expenses">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;

import ExpenseItem from './ExpenseItem'
import './Expenses.css';

const Expenses = (props) => {
  
    
    return (      
        <ExpenseItem 
        date={props.date}
        title={props.title}
        amount={props.amount}
        />
    );
  }

export default ExpenseItem;

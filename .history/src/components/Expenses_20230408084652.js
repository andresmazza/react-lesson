import ExpenseItem from './ExpenseItem'
import './Expenses.css';

function Expenses(props) {
  
    
    return (
      <div>
        <ExpenseItem 
        date={props.date}
        title={props.title}
        amount={props.amount}
        />        
      </div>
    );
  }

export default ExpenseItem;

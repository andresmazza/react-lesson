
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  
    
    return (
      <div className='expenses'>
         <ExpenseItem 
        title ={props.title}
        amount={props.amount}
        date  ={props.date}
        ></ExpenseItem>
      </div>
    );
  }

export default ExpenseItem;

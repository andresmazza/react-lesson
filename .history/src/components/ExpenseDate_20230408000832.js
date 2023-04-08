
function ExpenseDate(props) {
   /* const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.toLocaleString('en-US',{ day: '2-digit'});
    const year = props.date.getFullYear();*/
    return (
      <div className='expense-item'>
        <div>
            <div>{props.month}</div>
            <div>{props.year}</div>
            <div>{props.day}</div>
        </div>        
      </div>
    );
  }

export default ExpenseDate;

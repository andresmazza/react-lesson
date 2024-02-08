import './ExpenseDate.css';

const ExpenseDate = (props) => {
  
    let currentDate = props.date;
    let month = '';
    let day = '';
    let year = '';

    if  (!(currentDate instanceof Date)) {
      currentDate = new Date(currentDate +'T00:00:00');
    }
    month = currentDate.toLocaleString('es-AR',{month: 'long'});
    day = currentDate.toLocaleString('es-AR',{ day: '2-digit'});
    year = currentDate.getFullYear();

    return (
      <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>        
      </div>
    );
  }

export default ExpenseDate;

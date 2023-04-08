import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    { title: 'Car Insurance', amount: 33.33, date: new Date() },
    { title: 'test3', amount: 22.23, date: new Date() },
    { title: 'test#', amount: 43.33, date: new Date() },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title ={expenses[0].title}
        amount={expenses[0].amount}
        date  ={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem 
        title ={expenses[1].title}
        amount={expenses[1].amount}
        date  ={expenses[1].date}
        ></ExpenseItem>
    </div>
  );
}

export default App;

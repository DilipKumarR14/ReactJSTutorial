
import './App.css';
import ExpenseItem from "./components/ExpenseItem";


function App() {

  const expense = [
    {id:1, title:'title1', amount:656, date: new Date()},
    {id:2, title:'title2', amount:232, date: new Date()},
    {id:3, title:'title3', amount:432, date: new Date()},
  ];

  return (
    <div className="App">
      <h2>HWLLLLL WORLD</h2>
      <ExpenseItem title={expense[0].title}
                   amount={expense[0].amount}
                   date={expense[0].date} ></ExpenseItem>
      <ExpenseItem title={expense[1].title}
                   amount={expense[1].amount}
                   date={expense[1].date} ></ExpenseItem>
      <ExpenseItem title={expense[2].title}
                   amount={expense[2].amount}
                   date={expense[2].date} ></ExpenseItem>
    </div>
  );
}

export default App;

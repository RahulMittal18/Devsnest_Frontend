import './App.css';
import data from './data.json';
import FoodCard from './FoodCard';
import {useState} from 'react';

function App() {
  const [state, setState] = useState(data)


  return (
    <div className="app">
    <h1 className="heading">Calorie Tracker</h1>
    <div className="container">
      {
      (state.length>0) ?
        state.map((food) => {
          return <FoodCard state={state} setState={setState} food={food}   />;
        }):<p>No Item Left</p>
      }
      
    </div>
    </div>
  );
}

export default App;

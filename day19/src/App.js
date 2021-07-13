import './App.css';
import Counter from './Counters'

function App() {
  return (
    <div>
      <h1>Counters</h1>
      <div className="container">
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;

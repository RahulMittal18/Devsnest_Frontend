import './App.css';
import MakeCells from './Board';

function App() {
  return (
    <div className="container">
      <h1>ChessBoard</h1>
      <div className="board">
        <MakeCells />
      </div>
    </div>
    
  );
}

export default App;

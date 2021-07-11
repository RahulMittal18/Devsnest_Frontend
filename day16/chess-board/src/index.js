import React from 'react';
import ReactDOM from 'react-dom';
import Board from './chess.jsx';
import './style.css';


const App=()=>{
  return(
    <div className="container">
      <h1>ChessBoard</h1>
      <Board/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

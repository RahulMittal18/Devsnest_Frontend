import Card from './Card'

function App() {
  return (
    <div>
    <h1 className="heading">Calorie Counter</h1>
    <div className="container">
        <Card food="Pizza" cal="50"/>
        <Card food="Burger" cal="100"/>
        <Card food="Coke" cal="75"/>
        <Card food="Pani Puri" cal="25"/>
        <Card food="Fried Rice" cal="80"/>
        <Card food="Sandwich" cal="120"/>
        <Card food="Muffin" cal="60"/>
    </div>
    </div>
  );
}

export default App;

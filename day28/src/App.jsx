import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useSelector } from "react-redux";
import Navbar from './components/navbar'
import WeatherData from "./components/weatherDataCard";

function App() {
  const isDarkMode = useSelector(state => state.isDarkMode)

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <div className="container">
        <div className={isDarkMode ? "row dark" : "row"}>
          <Navbar />
          <WeatherData />
        </div>
      </div>
    </div>
  );
}


export default App;
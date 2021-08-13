import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  const [place, setPlace] = useState("Charkhi Dadri");
  const [placeData, setPlaceData] = useState({});
  const [clicked, setClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=f3bfc4c75db2479896d172441210608&q=${place}&days=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });
  }, []);

  const updatePlaceData = () => {
    setClicked(!clicked);

    fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=f3bfc4c75db2479896d172441210608&q=${place}&days=2`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaceData(data);
      });

    
  };

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <div className="container">
        <div className={isDarkMode ? "row dark" : "row"}>
          <div
            className={
              isDarkMode
                ? "offset-md-3 offset-lg-3 col-12 col-md-6 col-lg-6 navbar dark p-0"
                : "offset-md-3 offset-lg-3 col-12 col-md-6 col-lg-6 navbar p-0"
            }
          >
            {clicked ? (
              <div className="col-12 form">
                <input
                  type="text"
                  // value={place}
                  placeholder="Enter City"
                  onChange={(e) => {
                    setPlace(e.target.value);
                  }}
                />
                <button className={isDarkMode? "btn dark btn-primary": "btn light btn-primary"} onClick={updatePlaceData}>
                  Submit
                </button>
              </div>
            ) : (
              <div className={isDarkMode ? "header dark" : "header"}>
                <div className="heading">
                  <h2>Weather</h2>
                </div>

                <div className="btns-div">
                  <div className="mode">
                    {isDarkMode ? (
                      <button
                        type="button"
                        class="btn btn-light"
                        onClick={(e) => {
                          setIsDarkMode(!isDarkMode);
                        }}
                      >
                        Light
                      </button>
                    ) : (
                      <button
                        type="button"
                        class="btn btn-dark"
                        onClick={(e) => {
                          setIsDarkMode(!isDarkMode);
                        }}
                      >
                        Dark
                      </button>
                    )}
                  </div>
                  <div className={isDarkMode? "search dark" : "search"}>
                    <button
                      onClick={(e) => {
                        setClicked(!clicked);
                      }}
                    >
                      <SearchIcon style={{ fontSize: 35 }} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="offset-md-3 offset-lg-3 col-12 col-md-6 col-lg-6 weather p-0">
            <div className={isDarkMode ? "card dark" : "card light"}>
              {placeData.location ? (
                <div>
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="temp">{placeData.current.temp_c}°</div>
                  <div className="desc">{placeData.current.condition.text}</div>
                  <div className="place">{placeData.location.name}</div>
                  <div className="container">
                    <div
                      className={
                        isDarkMode ? "row whp dark whp-1" : "row whp whp-1"
                      }
                    >
                      <div className="col">
                        <div className="title">Temp(Max/Min)</div>
                        <div className="data">
                          {placeData.forecast.forecastday[0].day.maxtemp_c}°
                          <span className="unit">C</span>
                        </div>
                        <div className="data">
                          {placeData.forecast.forecastday[0].day.mintemp_c}°
                          <span className="unit">C</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title uv">UV Index</div>
                        <div className="data">
                          {placeData.current.uv}
                          <span className="unit"></span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Sunrise/Sunset</div>
                        <div className="data">
                          {placeData.forecast.forecastday[0].astro.sunrise}
                          <span className="unit"></span>
                        </div>
                        <div className="data">
                          {placeData.forecast.forecastday[0].astro.sunset}
                          <span className="unit"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div
                      className={
                        isDarkMode ? "row whp dark whp-2" : "row whp whp-2"
                      }
                    >
                      <div className="col">
                        <div className="title">Wind Flow</div>
                        <div className="data">
                          {placeData.current.wind_kph}
                          <span className="unit">km/h</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {placeData.current.humidity}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Precipitation</div>
                        <div className="data">
                          {placeData.current.precip_mm}
                          <span className="unit">mm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2 style={{ padding: 10 }}>Place Not Found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

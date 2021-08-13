import { useSelector } from "react-redux"

const WeatherData = () => {
    const isDarkMode = useSelector(state => state.isDarkMode)
    const placeData = useSelector(state => state.placeData)

    return (
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
    );
}

export default WeatherData;
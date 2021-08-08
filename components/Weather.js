import React from "react";
import { useAppContext } from "../context/state";

const Weather = () => {
  const weather = useAppContext();

  return (
    <div>
      {weather && (
        <div className="weather">
          <h2>{weather.name}</h2>
          <h2>
            {weather.main.temp > 273.15 && "+"}
            {(weather.main.temp - 273.15).toFixed(2)} °​C
          </h2>
          <img
            className="weatherPic"
            alt={weather.weather[0].description}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            title={weather.weather[0].description}
            height={50}
            width={50}
          />
        </div>
      )}
    </div>
  );
};

export default Weather;

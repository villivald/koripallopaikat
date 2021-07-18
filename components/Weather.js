import React from "react";

const Weather = ({ weather }) => {
  return (
    <div>
      {weather && (
        <div className="weather">
          <h1>{weather.name}</h1>
          <h2>{(weather.main.temp - 273.15).toFixed(2)} °​C</h2>
          <img
            alt={weather.weather[0].description}
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          />
        </div>
      )}
    </div>
  );
};

export default Weather;

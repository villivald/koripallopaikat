import React from "react";

const Weather = ({ weather }) => {
  return (
    <div>
      {weather && (
        <div className="weather">
          <h2>{weather.name}</h2>
          <h2>{(weather.main.temp - 273.15).toFixed(2)} °​C</h2>
          <img
            alt={weather.weather[0].description}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            height={50}
            width={50}
          />
        </div>
      )}
    </div>
  );
};

export default Weather;

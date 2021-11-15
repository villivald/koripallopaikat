import { useAppContext } from "../context/state";
import Image from "next/image";

const Weather = () => {
  const state = useAppContext();
  const weather = state.weather;

  return (
    <div>
      {weather && (
        <div className="weather">
          <h2>{weather.name}</h2>
          <h2>
            {weather.main.temp > 273.15 && "+"}
            {(weather.main.temp - 273.15).toFixed(2)} °​C
          </h2>
          <Image
            className="weatherPic"
            alt={weather.weather[0].description}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            title={weather.weather[0].description}
            height={50}
            width={50}
          />
          <div className="commandPic">
            <Image
              className="commandPicIcon"
              alt="command button"
              src="/command.svg"
              title="command button"
              height={50}
              width={50}
            />
            <span>/</span>
            <Image
              alt="ctrl button"
              src="/ctrl.svg"
              title="ctrl button"
              height={35}
              width={35}
            />
            <span>＋</span>
            <span>K</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;

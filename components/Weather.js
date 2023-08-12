import Image from "next/image";

import styles from "../css/Weather.module.css";

export default function Weather({ weather }) {
  return (
    <div>
      {weather && (
        <div className={styles.weather}>
          <h2>{weather.name}</h2>
          <h2>
            {weather.main.temp > 273.15 && "+"}
            {(weather.main.temp - 273.15).toFixed(2)} °​C
          </h2>
          <Image
            className={styles.weatherPic}
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
}

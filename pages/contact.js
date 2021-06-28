import Header from "../components/Header";

export default function Top({ weather }) {
  return (
    <div>
      <Header />
      {weather && (
        <div>
          <h1>{weather.name}</h1>
          <h2>{(weather.main.temp - 273.15).toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Helsinki&appid=${process.env.API_KEY}`
  );
  const weather = await res.json();

  return {
    props: {
      weather,
    },
  };
};

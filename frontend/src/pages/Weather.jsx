import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);

  const getWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c63504487d8c7827d7f746863fd87189&units=metric`
    );
    const result = await res.json();
    setData(result);
  };

  return (
    <div>
      <h1>Weather</h1>

      <input onChange={(e) => setCity(e.target.value)} />
      <button onClick={getWeather}>Search</button>

      {data && (
        <div>
          <h2>{data.name}</h2>
          <p>{data.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
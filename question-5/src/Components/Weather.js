import React from "react";
import { useState } from "react";
import DisplayWeather from "./DisplayWeather";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const getWeather = () => {
    if (search.trim() === "") {
      setWeatherData(null);
      setError("Unable to fetch weather data");
      return;
    }
    // Using OpenWeatherMap API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (response.status === 404) {
          setWeatherData(null);
          setError("Unable to fetch weather data");
          return;
        }
        setError(null);
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
      });
  };
  return (
    <div>
      <label>Enter a city name: </label>
      <input
        style={{ margin: "5px" }}
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button type="button" onClick={getWeather}>
        Search
      </button>
      {error && <p>{error}</p>}
      {weatherData && <DisplayWeather weather={weatherData} />}
    </div>
  );
};

export default Weather;

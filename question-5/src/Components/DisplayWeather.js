import React from "react";
import moment from "moment";

const DisplayWeather = ({ weather }) => {
  const temperatureFahrenheit = parseInt(
    ((weather.main.temp - 273.15) * 9) / 5 + 32
  );
  const temperatureCelsius = Math.round((temperatureFahrenheit - 32) / 1.8);
  const iconCode = weather.weather[0].icon;
  const iconURL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const description = weather.weather[0].description;
  const timezone = weather.timezone;
  const timezoneInMinutes = timezone / 60;
  const currTime = moment().utcOffset(timezoneInMinutes).format("h:mm A");

  return (
    <div>
      <h2>
        Weather in {weather.name}, {weather.sys.country}
      </h2>
      <p>
        {temperatureCelsius}°C / {temperatureFahrenheit}°F
      </p>
      <img src={iconURL} />
      <p>{description}</p>
      {currTime}
    </div>
  );
};

export default DisplayWeather;

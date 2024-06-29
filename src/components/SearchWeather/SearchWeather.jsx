import React, { useEffect, useState } from "react";
import "./SearchWeather.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import env from "react-dotenv";

const SearchWeather = (props) => {
  const [weather, setWeather] = useState("");
  const fetchData = async () => {
    const apiKey = env.API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };
  useEffect(() => {
    fetchData();
  }, [props.city]);

  return (
    <>
      <div>
        {weather === "" || weather.cod !== 200 ? (
          <div>{weather.message || "Error in fetching data"}</div>
        ) : (
          <div className="weather-card">
            <div className="weather-heading">
              <LocationOnIcon />
              <span>
                {weather.name}{" "}
                <sup className="weather-country">{weather.sys.country}</sup>
              </span>
            </div>
            <div className="weather-temp">
              {Math.trunc(weather.main.temp)} °C
            </div>
            <div className="weather-img">
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                alt="weather-icon"
              />
            </div>
            <div className="weather-desc">{weather.weather[0].description}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchWeather;

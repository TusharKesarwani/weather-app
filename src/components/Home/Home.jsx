import React, { useState } from "react";
import "./Home.css";
import "../SearchWeather/SearchWeather";
import SearchWeather from "../SearchWeather/SearchWeather";
import TextField from "@mui/material/TextField";

const Home = () => {
  const [city, setCity] = useState("");

  return (
    <>
      <div className="home">
        <div className="main-card">
          <div>
            <h1>Simple Weather App</h1>
          </div>
          <div className="search-bar">
            <TextField
              id="standard-basic"
              label="Search for a city"
              variant="standard"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
              autoComplete="off"
            />
          </div>
          <div>{city === "" ? "" : <SearchWeather city={city} />}</div>
        </div>
      </div>
    </>
  );
};

export default Home;

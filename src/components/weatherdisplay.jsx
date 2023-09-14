import React, { useState, useEffect } from "react";
import "./style.css";
import Weathercard from "./weathercard";

const Temp = ()=>{
const [searchValue,setSearchValue] = useState("karachi")
const [weatherInfo,setWeatherInfo] = useState({})
const getWeatherInfo = async()=>{
try {
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=0df3b97dd9f9db02971c6a1e93ad06b3`;
    let res = await fetch(url);
    let data = await res.json();
    const { temp, humidity, pressure } = data.main;
    const { main: weathermood } = data.weather[0];
    const { name } = data;
    const { speed } = data.wind;
    const { country, sunset } = data.sys;
    const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setWeatherInfo(myNewWeatherInfo);
} catch (error) {
    
    console.log(error)
}
};
useEffect(() => {
    getWeatherInfo();
  });
  return (
    <>
    
      <div className="wrap" style={{display:"flex"}}>
        <h1 style={{color:"white"}}>MY WEATHER APP</h1>
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...weatherInfo} />
    </>
  );

}

export default Temp;
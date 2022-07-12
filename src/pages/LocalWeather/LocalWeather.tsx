//LocalWeather
import Axios from "axios";
import React, { useState, useEffect } from "react";

export default function LocalWeather() {
  const [lat, setLat]: any = useState(null);
  const [lon, setLon]: any = useState(null);
  const [data, setData]: any = useState({});
  const [status, setStatus]: any = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  });
  const apiCall = `https://api.openweathermap.org/data/3.0/onecall?lat=${Math.floor(
    lat
  )}&lon=${Math.floor(lon)}&appid=fe6c05e7fe38f6ac19e7ec7a78fc15cb`;

  const CallData = () => {
    Axios.get(apiCall).then((res) => {
      setData(res);
      console.log(data.data);
      console.log(data.data.daily.length);
    });
  };

  return (
    <div className="Local-Container">
      <button className="LoginButton" onClick={CallData}>
        click for weather
      </button>
      {data?.data?.daily?.length > 0 ? (
        <div className="Weather-Card">
          <h1>{data?.data.current.weather[0].description}</h1>
          <ul className="Weather-Items">
            <li className="Weather-Item">
              <img
                src={`http://openweathermap.org/img/wn/${data?.data.current.weather[0].icon}@2x.png`}
                alt="weather icon"
              />
            </li>
            <li className="Weather-Item">
              <h2>
                <span className="fa-solid fa-droplet"></span>{" "}
                {data?.data.current.humidity}%
              </h2>
            </li>
            <li className="Weather-Item">
              <h2>
                <span className="fa-solid fa-temperature-half"></span>{" "}
                {data?.data.current.temp}
              </h2>
            </li>
            <li className="Weather-Item">
              <h2>
                <span className="fa-solid fa-sun"></span>{" "}
                {data?.data.current.uvi}
              </h2>
            </li>
            <li className="Weather-Item">
              <h2>
                <span className="fa-solid fa-cloud"></span>{" "}
                {data?.data.current.clouds}%
              </h2>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

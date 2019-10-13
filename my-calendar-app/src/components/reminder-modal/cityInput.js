import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const cities = [
  {
    val: 0,
    city: "Quito",
    weather:
      "https://samples.openweathermap.org/data/2.5/forecast/daily?id=524901&appid=b1b15e88fa797225412429c1c50c122a1"
  },
  {
    val: 1,
    city: "Bogota",
    weather:
      "https://samples.openweathermap.org/data/2.5/forecast/daily?id=5095808&lang=zh_cn&appid=b1b15e88fa797225412429c1c50c122a1"
  },
  {
    val: 1,
    city: "New York",
    weather:
      "https://samples.openweathermap.org/data/2.5/forecast/daily?id=5128616&lang=zh_cn&appid=b1b15e88fa797225412429c1c50c122a1"
  }
];

const City = ({ city, setCity, setWeather }) => (
  <Select
    value={city}
    onChange={async e => {
      console.log(e.target);
      const resp = await fetch(e.target.value.weather, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Content-Type": "application/json"
      });
      const respJson = await resp.json();
      console.log(respJson);

      setCity(e.target.value.city);
    }}
    inputProps={{
      name: "Select",
      id: city
    }}
  >
    {cities.map(city => (
      <MenuItem value={city}>{city.city}</MenuItem>
    ))}
  </Select>
);

export default City;

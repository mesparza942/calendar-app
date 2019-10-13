import React from "react";
import { Select, MenuItem } from "@material-ui/core";
import axios from "axios";

const cities = [
  {
    val: 0,
    city: "Quito",
    weather:
      "http://api.openweathermap.org/data/2.5/weather?q=Quito,EC&APPID=55026460e36e1117b6b7c856e7d1ed7f"
  },
  {
    val: 1,
    city: "Bogota",
    weather:
      "http://api.openweathermap.org/data/2.5/weather?q=Bogota,CO&APPID=55026460e36e1117b6b7c856e7d1ed7f"
  },
  {
    val: 2,
    city: "New York",
    weather:
      "http://api.openweathermap.org/data/2.5/weather?q=New York,US&APPID=55026460e36e1117b6b7c856e7d1ed7f"
  }
];

const City = ({ city, setCity, setWeather }) => (
  <Select
    value={city}
    onChange={async e => {
      const resp = await axios.get(e.target.value.weather);
      setWeather(
        `Weather in ${resp.data.name} will have ${resp.data.weather[0].description}`
      );
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

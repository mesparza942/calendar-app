import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const hours = [
  { val: 0, txt: "12:00am" },
  { val: 1, txt: "1:00am" },
  { val: 2, txt: "2:00am" },
  { val: 3, txt: "3:00am" },
  { val: 4, txt: "4:00am" },
  { val: 5, txt: "5:00am" },
  { val: 6, txt: "6:00am" },
  { val: 7, txt: "7:00am" },
  { val: 8, txt: "8:00am" },
  { val: 9, txt: "9:00am" },
  { val: 10, txt: "10:00am" },
  { val: 11, txt: "11:00am" },
  { val: 12, txt: "12:00pm" },
  { val: 13, txt: "1:00pm" },
  { val: 14, txt: "2:00pm" },
  { val: 15, txt: "3:00pm" },
  { val: 16, txt: "4:00pm" },
  { val: 17, txt: "5:00pm" },
  { val: 18, txt: "6:00pm" },
  { val: 19, txt: "7:00pm" },
  { val: 20, txt: "8:00pm" },
  { val: 21, txt: "9:00pm" },
  { val: 22, txt: "10:00pm" },
  { val: 23, txt: "11:00pm" }
];

const TimePicker = ({ time, setTime }) => (
  <Select
    value={time}
    onChange={e => setTime(e.target.value)}
    inputProps={{
      name: time.toString(),
      id: time
    }}
  >
    {hours.map(hour => (
      <MenuItem value={hour.val}>{hour.txt}</MenuItem>
    ))}
  </Select>
);

export default TimePicker;

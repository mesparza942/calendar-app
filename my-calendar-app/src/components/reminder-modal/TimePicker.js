import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const TimePicker = ({ time, setTime }) => (
  <Select
    value={time}
    onChange={e => setTime(e.target.value)}
    inputProps={{
      name: time,
      id: time
    }}
  >
    <MenuItem value={0}>12:00am</MenuItem>
    <MenuItem value={1}>1:00am</MenuItem>
    <MenuItem value={2}>2:00am</MenuItem>
    <MenuItem value={3}>3:00am</MenuItem>
    <MenuItem value={4}>4:00am</MenuItem>
    <MenuItem value={5}>5:00am</MenuItem>
    <MenuItem value={6}>6:00am</MenuItem>
    <MenuItem value={7}>7:00am</MenuItem>
    <MenuItem value={8}>8:00am</MenuItem>
    <MenuItem value={9}>9:00am</MenuItem>
    <MenuItem value={10}>10:00am</MenuItem>
    <MenuItem value={11}>11:00am</MenuItem>
    <MenuItem value={12}>12:00pm</MenuItem>
    <MenuItem value={13}>1:00pm</MenuItem>
    <MenuItem value={14}>2:00pm</MenuItem>
    <MenuItem value={15}>3:00pm</MenuItem>
    <MenuItem value={16}>4:00pm</MenuItem>
    <MenuItem value={17}>5:00pm</MenuItem>
    <MenuItem value={18}>6:00pm</MenuItem>
    <MenuItem value={19}>7:00pm</MenuItem>
    <MenuItem value={20}>8:00pm</MenuItem>
    <MenuItem value={21}>9:00pm</MenuItem>
    <MenuItem value={22}>10:00pm</MenuItem>
    <MenuItem value={23}>11:00pm</MenuItem>
  </Select>
);

export default TimePicker;

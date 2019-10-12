import React, { useState } from "react";
import styled from "styled-components";
import { Calendar, AddButton, Header, ReminderModal } from "./components";
import "./App.css";

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

const App = () => {
  const [open, setOpen] = useState(false);
  const [reminders, updateReminders] = useState([]);
  const [view, onView] = useState("month");

  const handleOpen = () => setOpen(true);

  const handleReminders = ({
    title,
    city,
    startYear,
    startMonth,
    startDay,
    startTime,
    endYear,
    endMonth,
    endDay,
    endTime,
    color
  }) => {
    const start = new Date(startYear, startMonth, startDay, startTime, 0, 0, 0);
    start.setTime(start.getTime() - new Date().getTimezoneOffset() * 60 * 1000);
    const end = new Date(endYear, endMonth, endDay, endTime, 0, 0, 0);
    end.setTime(end.getTime() - new Date().getTimezoneOffset() * 60 * 1000);
    const newReminder = {
      title: `${title} - ${city}`,
      start,
      end,
      children: () => <div style={{ backgroundColor: color }}>color</div>
    };
    updateReminders([...reminders, newReminder]);
    setOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <StyledContent>
        <Calendar events={reminders} view={view} />
        <AddButton addReminder={handleOpen} />
        <ReminderModal
          open={open}
          setOpen={setOpen}
          updateReminders={handleReminders}
        />
      </StyledContent>
    </div>
  );
};

export default App;

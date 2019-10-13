import React, { useState } from "react";
import styled from "styled-components";
import uuid from "uuid";
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
  const [editingReminder, setEditingReminder] = useState({});
  const [isEditing, setEditMode] = useState(false);
  const [view, onView] = useState("month");
  const [dateClicked, setDateClicked] = useState();

  const handleOpen = () => setOpen(!open);

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
    if (isEditing) {
      updateReminders(
        reminders.map(rem =>
          rem.key === editingReminder.key
            ? {
                title: `${title} - ${city}`,
                start,
                end,
                reminderName: title,
                reminderCity: city,
                startYear,
                startMonth,
                startDay,
                startTime,
                endYear,
                endMonth,
                endDay,
                endTime,
                color
              }
            : rem
        )
      );
    } else {
      const newReminder = {
        key: uuid(),
        title: `${title} - ${city}`,
        start,
        end,
        reminderName: title,
        reminderCity: city,
        startYear,
        startMonth,
        startDay,
        startTime,
        endYear,
        endMonth,
        endDay,
        endTime,
        color
      };
      updateReminders([...reminders, newReminder]);
    }
    setOpen(false);
  };

  //const handleEditReminder = (reminder) => reminders.map(rem => rem.key === reminder.key)
  const handleEditReminder = reminder => {
    setEditMode(true);
    setEditingReminder(reminder);
    handleOpen();
  };

  return (
    <div className="App">
      <Header />
      <StyledContent>
        <Calendar
          events={reminders}
          view={view}
          handleEditReminder={handleEditReminder}
          openModal={setOpen}
          setDateClicked={setDateClicked}
        />
        <AddButton addReminder={handleOpen} />
        <ReminderModal
          open={open}
          setOpen={handleOpen}
          updateReminders={handleReminders}
          editingReminder={editingReminder}
          isEditing={isEditing}
          setEdit={setEditMode}
          setEditingReminder={setEditingReminder}
          dateClicked={dateClicked}
        />
      </StyledContent>
    </div>
  );
};

export default App;

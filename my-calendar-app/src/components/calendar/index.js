import React, { useState } from "react";
import BigCalendar from "react-big-calendar";
import styled from "styled-components";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

const StyledCalendar = styled.div`
  .rbc-today {
    background-color: #eaf6ff !important;
  }
  .rbc-row-bg > .rbc-day-bg:first-child,
  .rbc-day-bg:last-child {
    background-color: #f2f2f2;
  }
  .rbc-row-content > .rbc-row > div:last-child:not(.rbc-off-range),
  div:first-child:not(.rbc-off-range) > a {
    color: #4e749d;
  }
  div & .rbc-off-range-bg {
    background: unset;
  }
  div & .rbc-off-range {
    font-weight: bold;
  }
  div & .rbc-header {
    background-color: #2f74b5;
    color: #fff;
  }
  div & .rbc-event {
    background-color: unset;
  }
  ${({ events }) =>
    !!events.length &&
    events.map(
      ev =>
        `div[title="${ev.title}"] { background-color: ${ev.color}; border-radius: 5px;}`
    )};
`;

const Calendar = ({
  events,
  handleEditReminder,
  openModal,
  setDateClicked,
  view
}) => {
  const [currentDate, setCurrentDate] = useState(
    new Date(2019, 9, 11, 0, 0, 0)
  );
  return (
    <StyledCalendar events={events}>
      <div style={{ width: 800, height: 500 }}>
        <BigCalendar
          selectable
          events={events}
          step={60}
          view={view}
          views={["month"]}
          date={currentDate}
          onSelectEvent={handleEditReminder}
          onSelectSlot={({ start }) => {
            setDateClicked(start);
            openModal(true);
          }}
          onNavigate={dateClicked => {
            setCurrentDate(dateClicked);
            setDateClicked(dateClicked);
            openModal(true);
          }}
        />
      </div>
    </StyledCalendar>
  );
};

export default Calendar;

import React from "react";
import BigCalendar from "react-big-calendar";
import styled from "styled-components";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

const StyledCalendar = styled.div`
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

const Calendar = ({ events, view }) => (
  <StyledCalendar events={events}>
    <div style={{ width: 800, height: 500 }}>
      <BigCalendar
        toolbar={true}
        events={events}
        step={60}
        view={view}
        views={["week", "month"]}
        date={new Date(2019, 9, 11, 0, 0, 0)}
      />
    </div>
  </StyledCalendar>
);

export default Calendar;

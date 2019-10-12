import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
BigCalendar.momentLocalizer(moment);

const Calendar = ({ events, view }) => (
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
);

export default Calendar;

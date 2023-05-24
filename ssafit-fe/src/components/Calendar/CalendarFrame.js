import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarFrame = () => {
  return (
    <div className="App">
      <FullCalendar plugins={[dayGridPlugin]} />
    </div>
  );
};

export default CalendarFrame;

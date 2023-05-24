import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // dayClick을 위한 interactionPlugin

const Calendar = () => {
  const [events, setEvents] = useState([]); // 이벤트 처리용

  const handleDateClick = (info) => {
    const dateEvents = events.filter(event => event.date === info.dateStr);
    console.log(dateEvents); // 이 데이터를 원하는 방식으로 출력하면 됩니다
  }

  const addEvent = (newEvent) => {
    setEvents(oldEvents => [...oldEvents, newEvent]);
  }

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]} // interactionPlugin 추가
        dateClick={handleDateClick} // handleDateClick 함수 연결
        events={events} // events 배열 제공
      />
    </div>
  );
};

export default Calendar;

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Modal from "react-modal";
import "tailwindcss/tailwind.css";

Modal.setAppElement("#root");

const Calendar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (arg) => {
    setSelectedDate(arg.dateStr);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          // add your event source here
        ]}
        dateClick={handleDateClick}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-semibold mb-2">Selected Date</h2>
        <p className="mb-4">{selectedDate}</p>
        <button
          onClick={closeModal}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Calendar;
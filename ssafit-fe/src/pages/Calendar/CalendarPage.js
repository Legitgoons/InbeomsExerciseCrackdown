import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Border = ({ color, children }) => (
  <div className={`mb-20 p-8 flex justify-center items-center bg-${color}`}>
    {children}
  </div>
);

const InputWrapper = ({ children }) => (
  <div className="flex items-center min-w-40 min-h-48 text-base p-6 pl-15 border-2 border-black rounded-8 overflow-hidden">
    {children}
  </div>
);

const Button = ({ children }) => (
  <button className="flex justify-center items-center font-bold rounded-6 cursor-pointer border-black">
    {children}
  </button>
);

const Input = ({ value, onClick }) => (
  <input
    value={value}
    onClick={onClick}
    className="flex-1 border-none outline-none text-base bg-transparent"
  />
);

const CustomInput = React.forwardRef(
  (
    {
      value,
      onClick,
      disabled,
      readOnly,
      buttonOnly,
      ...props
    },
    ref
  ) => {
    return (
      <InputWrapper ref={ref} {...props}>
        <Input value={value} onClick={onClick} />
        {props.InputProps ? (
          props.InputProps.endAdornment
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={onClick}
          >
            <path
              fillRule="evenodd"
              d="M17 7h2v2h-2V7zm-1-4h2v2h-2V3zm-3 1h2v2h-2V4zm-4 0h2v2H9V4zm-1 9H4v-1h4v1zm8 0H9v-1h2v-2H9V9h2V7H9V5h4v5h1V4h2v6h-1v2h2v2h-2v1zm4 4h-2v2h-2v2h-2v2h6v-2h-2v-2h2v-2z"
            />
          </svg>
        )}
      </InputWrapper>
    );
  }
);

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [isShow, setIsShow] = useState(true); // Set initial value of isShow to true

  const handleOnClick = () => {
    setIsShow(!isShow);
  };

  const handleOnChange = (value) => {
    setDate(value);
  };

  return (
    <Border color="FFF5EE">
      <h3 className="text-2xl">React Calendar</h3>
      <div>
        <CustomInput
          onClick={handleOnClick}
          value={date.toISOString().split("T")[0]}
        />
        {isShow && (
          <Calendar
            onClickDay={handleOnChange}
            onChange={setDate}
            value={date}
          />
        )}
      </div>
    </Border>
  );
};

export default CalendarPage;
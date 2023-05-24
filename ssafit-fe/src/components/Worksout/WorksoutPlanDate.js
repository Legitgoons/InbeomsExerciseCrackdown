import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { ko } from "date-fns/esm/locale";

const WortkoutPlanDate = ({ onDateSelect, selectedDate }) => {
  const handleDateSelection = (date) => {
    onDateSelect(date);
  };

  const formatDate = (date) => {
    return format(date, "yyyy.MM.dd (eee)", { locale: ko });
  };

  return (
    <div>
      <DatePicker
        locale={ko} // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false} // 화살표 변경
        minDate={new Date()} // minDate 이전 날짜 선택 불가
        // maxDate={new Date()} // maxDate 이후 날짜 선택 불가
        selected={selectedDate}
        onChange={handleDateSelection}
        open // datepicker를 항상 펼쳐진 상태로 표시
        shouldCloseOnSelect={false} // 날짜를 선택하면 datepicker가 자동으로 닫히지 않음
        defaultValue={new Date()} // 기본 선택 날짜를 당일로 설정
        customInput={<input value={formatDate(selectedDate)} readOnly />} // 커스텀 인풋 사용하여 변환된 형식으로 표시
      />
    </div>
  );
};

export default WortkoutPlanDate;

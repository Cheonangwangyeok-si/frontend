import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { startOfWeek, endOfWeek } from "date-fns";
import { ko } from "date-fns/locale";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DateSelect.scss";

const DateSelect = ({ currentDate, setCurrentDate }) => {
  const start = startOfWeek(new Date());
  const end = endOfWeek(new Date());

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1, 두 자리 수로 만듦
    const day = String(date.getDate()).padStart(2, "0"); // 두 자리 수로 만듦
    return `${year}-${month}-${day}`;
  };

  const handleChange = (date) => {
    const formattedDate = formatDate(date);
    console.log(formattedDate);
    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    const today = new Date();
    setCurrentDate(formatDate(today));
  }, [currentDate]);

  return (
    <div className="select-content">
      <label>날짜</label>
      <DatePicker
        selected={new Date(currentDate)}
        onChange={handleChange}
        minDate={start}
        maxDate={end}
        dateFormat="yyyy년 MM월 dd일 eeee"
        locale={ko}
      />
    </div>
  );
};

export default DateSelect;

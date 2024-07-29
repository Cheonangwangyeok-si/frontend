import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { startOfWeek, endOfWeek } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/DiaryInput.scss";

const DateSelect = ({ currentDate, setCurrentDate}) => {
  const start = startOfWeek(new Date());
  const end = endOfWeek(new Date());

  return (
    <div className="form-group">
      <label>날짜</label>
      <DatePicker
        selected={currentDate}
        onChange={(date) => setCurrentDate(date)}
        minDate={start}
        maxDate={end}
        dateFormat="yyyy년 MM월 dd일 eee"
      />
    </div>
  );
};

export default DateSelect;
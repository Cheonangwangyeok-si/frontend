import "../styles/calendar/WeeklyCalendar.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import downImage from "../styles/calendar/down-btn.png";
import Day from "./Day";
import React, { useState, useEffect } from "react";

const WeeklyCalendar = ({
  dummy,
  currentDate,
  setCurrentDate,
  getYearMonthDay,
  setClickDay,
  clickDay,
}) => {
  const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weeks = ["첫째주", "둘째주", "셋째주", "넷째주", "다섯째주"];

  // Function to determine the week of the month for a given date
  const getWeekOfMonth = (date) => {
    const startWeekDayIndex = new Date(
      date.getFullYear(),
      date.getMonth(),
      1
    ).getDay();
    const offsetDate = date.getDate() + startWeekDayIndex - 1;
    return Math.floor(offsetDate / 7);
  };

  const [selectedWeek, setSelectedWeek] = useState(
    weeks[getWeekOfMonth(currentDate)]
  );

  useEffect(() => {
    setSelectedWeek(weeks[getWeekOfMonth(currentDate)]);
  }, [currentDate]);

  // Function to get the start date of the selected week
  const getStartDateOfSelectedWeek = (year, month, weekIndex) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const startWeekDayIndex = firstDayOfMonth.getDay();
    const startDate = new Date(
      year,
      month,
      1 + weekIndex * 7 - startWeekDayIndex
    );
    return startDate;
  };

  const handleWeekChange = (e) => {
    const selectedWeekIndex = weeks.indexOf(e.target.value);
    const newStartDate = getStartDateOfSelectedWeek(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      selectedWeekIndex
    );
    setCurrentDate(newStartDate);
  };

  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());

  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    if (date.getMonth() === currentDate.getMonth()) {
      days.push(date);
    }
  }

  const findEvent = (date) => {
    const event = dummy.find((event) => event.date === getYearMonthDay(date));
    return event ? event.content : null;
  };

  return (
    <div className="calendar-content">
      <div className="select-container">
        <div className="picker-container">
          <DatePicker
            selected={currentDate}
            onChange={(date) => setCurrentDate(date)}
            dateFormat="MMMM, yyyy"
            showMonthYearPicker
            className="date-picker"
          />
          <img src={downImage} alt="down" className="down-image" />
        </div>

        <select
          className="week-selector"
          value={selectedWeek}
          onChange={handleWeekChange}
        >
          {weeks.map((week) => (
            <option key={week} value={week}>
              {week}
            </option>
          ))}
        </select>
      </div>

      <div className="calendar-weeks">
        {day.map((i, index) => {
          return <div key={index}>{i}</div>;
        })}
      </div>

      <div className="calendar-days">
        {days.map((day) => (
          <Day
            id={getYearMonthDay(day)}
            key={getYearMonthDay(day)}
            day={day}
            event={findEvent(day)}
            setCurrentDate={setCurrentDate}
            currentDate={currentDate}
            getYearMonthDay={getYearMonthDay}
            setClickDay={setClickDay}
            clickDay={clickDay}
          />
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;

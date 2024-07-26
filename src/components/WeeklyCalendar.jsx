import "../styles/calendar/WeeklyCalendar.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import downImage from "../styles/calendar/down-btn.png";
import Day from "./Day";
import React, { useState } from "react";

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

  const [selectedWeek, setSelectedWeek] = useState("첫째주");
  const weeks = ["첫째주", "둘째주", "셋째주", "넷째주", "다섯째주"];
  const isOpen = false;
  const moveWeek = () => {
    isOpen = !isOpen;
  };

  // Find the start of the week (Sunday)
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());

  // Generate the days of the current week
  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + i);
    days.push(date);
  }

  const findEvent = (date) => {
    const event = dummy.find((event) => event.date === getYearMonthDay(date));
    return event ? event.content : null;
  };

  return (
    <div className="calendar-content">
      <div className="weekly-calendar-header">
        <div className="calendar-month-year">
          <div>
            {monthNames[currentDate.getMonth()]}, {currentDate.getFullYear()}
          </div>
        </div>
        <img
          className="down-btn"
          onClick={() => {
            moveWeek(">");
          }}
          src={downImage}
          alt="down-btn"
        />
      </div>

      <DatePicker
        selected={currentDate}
        onChange={(date) => setCurrentDate(date)}
        dateFormat="MMMM, yyyy"
        showMonthYearPicker
        className="date-picker"
      />

      <select
        className="week-selector"
        value={selectedWeek}
        onChange={(e) => setSelectedWeek(e.target.value)}
      >
        {weeks.map((week) => (
          <option key={week} value={week}>
            {week}
          </option>
        ))}
      </select>

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

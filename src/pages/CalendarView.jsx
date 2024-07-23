import React from "react";
import { useEffect, useState, useCallback } from "react";
import Calendar from "../components/Calendar";
import DiaryInput from "../components/DiaryInput";
import DiaryInfo from "../components/DiaryInfo";
import Chart from "../components/Chart";
import '../styles/CalendarView.scss';


const CalendarView = () => {
  const [dummy, setDummy] = useState([
    {
      date: "2024-06-30",
      event: "이전",
    },
    {
      date: "2024-07-06",
      event: "집",
    },
  ]);

  const [thisweekData, setThisweekData] = useState([
    { id: "기쁨", label: "기쁨", value: 20 },
    { id: "슬픔", label: "슬픔", value: 10 },
    { id: "분노", label: "분노", value: 25 },
    { id: "두려움", label: "두려움", value: 5 },
    { id: "혐오", label: "혐오", value: 10 },
    { id: "놀람", label: "놀람", value: 30 },
  ]);

  const [currentDate, setCurrentDate] = useState(new Date());
  const [eventBool, setEventBool] = useState(false);
  const [modifyEvent, setModifyEvent] = useState(null);

  const getYearMonthDay = useCallback((date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  const id = getYearMonthDay(currentDate);

  const checkEvent = useCallback(
    (id) => {
      return dummy.find((item) => item.date === id);
    },
    [dummy]
  );

  useEffect(() => {
    const event = checkEvent(id);
    setEventBool(event);
    setModifyEvent(event);
  }, [id, checkEvent]);

  return (
    <div className="diary-page">
      <aside className="sidebar">
        
      </aside>
      <Calendar
        dummy={dummy}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        getYearMonthDay={getYearMonthDay}
      />
      {eventBool ? (
        <div>
          <DiaryInfo
            id={id}
            dummy={dummy}
            setDummy={setDummy}
            data={checkEvent(id)}
            setEventBool={setEventBool}
            setModifyEvent={setModifyEvent}
          />
          <div className="analysis-page">
            <div className="chart-container">
              <Chart data={thisweekData} lastweek="false" />
            </div>
          </div>
        </div>
      ) : (
        <DiaryInput
          id={id}
          dummy={dummy}
          setDummy={setDummy}
          modifyEvent={modifyEvent}
        />
      )}
    </div>
  );
};

export default CalendarView;

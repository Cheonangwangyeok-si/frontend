import React from "react";
import { useEffect, useState, useCallback } from "react";
import Calendar from "../components/Calendar";
import DiaryInput from "../components/DiaryInput";
import DiaryInfo from "../components/DiaryInfo";
import Chart from "../components/Chart";
import '../styles/DiaryView.scss';
import calendarImage from "../images/DiaryViewImage/Calendar.png";
import DiaryImage from "../images/DiaryViewImage/Diary.png";
import AnalyzeImage from "../images/DiaryViewImage/Analyze.png";


const CalendarView = () => {
  const [dummy, setDummy] = useState([
    {
      date: "2024-07-01",
      event: "ㄴ",
    },
    {
      date: "2024-07-02",
      event: "집",
    },
    {
      date: "2024-07-14",
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
  const [activeComponent, setActiveComponent] = useState("calendar");
  const [clickDay, setClickDay] = useState(false);

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
  }, [id, checkEvent]);

  const onClick = (component) => {
    setActiveComponent(component)
    setClickDay(false)
  }

  return (
    <div className="diary-page">
      <aside className="sidebar">
        <button onClick={() => { onClick("diaryInput") }}>감정 일기 작성하기</button>
        <hr />
        <ul>
          <li className={activeComponent === "calendar" ? "activeLi" : ""}
            onClick={() => { onClick("calendar") }}>
            <img src={calendarImage} />달력</li>
          <li className={activeComponent === "diaryList" ? "activeLi" : ""}
            onClick={() => { onClick("diaryList") }}>
            <img src={DiaryImage} />작성한 감정 일기</li>
          <li className={activeComponent === "analyzeView" ? "activeLi" : ""}
            onClick={() => { onClick("analyzeView") }}>
            <img src={AnalyzeImage} />감정 분석 통계</li>
        </ul>
      </aside>

      {activeComponent === "calendar" && (
        <div className="main-container">
          <h1>CALENDAR</h1>
          <div className="main-content">
            <Calendar
              dummy={dummy}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              getYearMonthDay={getYearMonthDay}
              setClickDay={setClickDay}
              clickDay={clickDay}
            />
            {eventBool ?
              <div>
                <DiaryInfo
                  id={id}
                  dummy={dummy}
                  setDummy={setDummy}
                  data={checkEvent(id)}
                  setEventBool={setEventBool}
                />
                <div className="analysis-page">
                  <div className="chart-container">
                    <Chart data={thisweekData} lastweek="false" />
                  </div>
                </div>
              </div>
              :
              <div>diaryList요약</div>
            }
          </div>
        </div>
      )}

      {activeComponent === "diaryList" && (
        <div className="main-container">
          <h1>MY EMOTIONAL DIARY</h1>
        </div>
      )}


      {activeComponent === "analyzeView" && (
        <div className="main-container">
          <h1>EMOTION ANALYSIS</h1>
        </div>
      )}

      {activeComponent === "diaryInput" && (
        // 감정 일기 작성하기 부분
        <div className="main-container">
          <h1>WRITE AN EMOTIONAL DIARY</h1>
          <DiaryInput
            id={id}
            dummy={dummy}
            setDummy={setDummy}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarView;

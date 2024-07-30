import React from "react";
import { useState } from "react";
import "../styles/DiaryView.scss";
import calendarImage from "../images/DiaryViewImage/Calendar.png";
import DiaryImage from "../images/DiaryViewImage/Diary.png";
import AnalyzeImage from "../images/DiaryViewImage/Analyze.png";


import CalendarPage from "../pages/CalendarPage";
import DiaryPage from "./DiaryPage";
import AnalyzePage from "./AnalyzePage";
import DiaryEntryPage from "./DiaryEntryPage";

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeComponent, setActiveComponent] = useState("calendar");
  const [clickDay, setClickDay] = useState(false);
  const [eventBool, setEventBool] = useState(false);

  const onClick = (component) => {
    setActiveComponent(component);
    setClickDay(false);
  };

  return (
    <div className="diary-page">
      <aside className="sidebar">
        <button
          onClick={() => {
            onClick("diaryInput");
          }}
        >
          감정 일기 작성하기
        </button>
        <hr />
        <ul>
          <li
            className={activeComponent === "calendar" ? "activeLi" : ""}
            onClick={() => {
              onClick("calendar");
            }}
          >
            <img src={calendarImage} />
            달력
          </li>
          <li
            className={activeComponent === "diaryList" ? "activeLi" : ""}
            onClick={() => {
              onClick("diaryList");
            }}
          >
            <img src={DiaryImage} />
            작성한 감정 일기
          </li>
          <li
            className={activeComponent === "analyzeView" ? "activeLi" : ""}
            onClick={() => {
              onClick("analyzeView");
            }}
          >
            <img src={AnalyzeImage} />
            감정 분석 통계
          </li>
        </ul>
      </aside>

      {activeComponent === "calendar" && (
        <CalendarPage
          setCurrentDate={setCurrentDate}
          setEventBool={setEventBool}
          currentDate={currentDate}
          setClickDay={setClickDay}
          eventBool={eventBool}
          clickDay={clickDay}
        />
      )}

      {activeComponent === "diaryList" && (
        <DiaryPage
          setActiveComponent={setActiveComponent}
          setClickDay={setClickDay}
          setCurrentDate={setCurrentDate}
        />
      )}

      {activeComponent === "analyzeView" && (
        <AnalyzePage />
      )}

      {activeComponent === "diaryInput" && (
        <DiaryEntryPage />
      )}
    </div>
  );
};

export default CalendarView;

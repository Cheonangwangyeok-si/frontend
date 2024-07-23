import React from "react";
import { useEffect, useState, useCallback } from "react";
import Calendar from "../components/Calendar";
import DiaryInput from "../components/DiaryInput";
import DiaryInfo from "../components/DiaryInfo";
import Chart from "../components/Chart";
import '../styles/DiaryView.scss';


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
        <div onClick={() => { onClick("diaryInput") }}>감정 일기 작성하기</div>
        <hr />
        <div onClick={() => { onClick("calendar") }}>달력</div>
        <div onClick={() => { onClick("diaryList") }}>작성한 감정 일기</div>
        <div onClick={() => { onClick("analyzeView") }}>감정 분석 통계</div>
      </aside>

      {activeComponent === "calendar" && (
        <div style={{ display: "flex" }}>
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
            <div>diaryList</div>
          }
        </div>
      )}

      {activeComponent === "diaryList" && (
        <div>일기 리스트</div>
      )}

      {activeComponent === "diaryInput" && (
        // 감정 일기 작성하기 부분
        <DiaryInput
          id={id}
          dummy={dummy}
          setDummy={setDummy}
        />)}
      {activeComponent === "analyzeView" && (
        <div>감정 분석 통계</div>
      )}

    </div>
  );
};

export default CalendarView;

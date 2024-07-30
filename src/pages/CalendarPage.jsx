import React, { useState, useCallback, useEffect } from "react";
import Calendar from "../components/Calendar";
import DiaryInfo from "../components/DiaryInfo";
import Emotion from "../components/Emotion";
import DayFeedback from "../components/DayFeedback";
import DiarySummaryList from "../components/DiarySummaryList";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";

const CalendarPage = ({ currentDate, setEventBool, setCurrentDate, setClickDay, clickDay, eventBool }) => {
  const [dummy, setDummy] = useState([
    {
      dateAt: "2024-06-01",
      title: "여름의 한가운데에서 느낀 슬픔",
      emotionType: HappyImage,
      shortFeedback: "한 줄 감정 결과1",
    },
    {
      dateAt: "2024-06-16",
      title: "여름의 한가운데에서 느낀 분노",
      emotionType: HappyImage,
      shortFeedback: "한 줄 감정 결과2",
    },
    {
      dateAt: "2024-07-17",
      title: "여름의 한가운데에서 느낀 절망",
      emotionType: HappyImage,
      shortFeedback: "한 줄 감정 결과3",
    },
    {
      dateAt: "2024-07-20",
      title: "여름의 한가운데에서 느낀 절망",
      emotionType: SurprisedImage,
      shortFeedback: "한 줄 감정 결과4",
    },
    {
      dateAt: "2024-07-27",
      title: "여름의 한가운데에서 느낀 절망",
      emotionType: BoringImage,
      shortFeedback: "한 줄 감정 결과5",
    },
  ]);

  const getYearMonthDay = useCallback((date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  const id = getYearMonthDay(currentDate);

  const checkEvent = useCallback(
    (id) => {
      return dummy.find((item) => item.dateAt === id);
    },
    [dummy]
  );

  useEffect(() => {
    const event = checkEvent(id);
    setEventBool(event);
  }, [id, checkEvent]);

  return (
    <div className="main-container">
      <h1>CALENDAR</h1>
      <div className="main-content1">
        <Calendar
          dummy={dummy}
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          getYearMonthDay={getYearMonthDay}
          setClickDay={setClickDay}
          clickDay={clickDay}
          viewMode={"month"}
        />

        {eventBool && clickDay ? (
          <div className="dayDiaryInfo-container">
            <DiaryInfo
              id={id}
              diaryData={dummy} // 일기 삭제할 때
              setDummy={setDummy}
              setClickDay={setClickDay}
              dayDiaryInfo={checkEvent(id)} // 하루 일기 정보
            />
            <DayFeedback dayDiaryInfo={checkEvent(id)} Emotion={Emotion} />
          </div>
        ) : (
          <DiarySummaryList
            diaryData={dummy}
            setDummy={setDummy}
            setClickDay={setClickDay}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        )}
      </div>
    </div>
  );
}

export default CalendarPage;

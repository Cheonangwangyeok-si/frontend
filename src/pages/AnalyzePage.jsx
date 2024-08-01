import React, { useState, useCallback} from "react";
import Chart from "../components/Chart";
import WeeklyCalendar from "../components/WeeklyCalendar";
import Emotion from "../components/Emotion";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";
import API from "../BaseUrl";
import useTokenHandler from "../layout/Header/useTokenHandler";
const AnalyzePage = () => {
  // 받아올 일기 정보들
  const { checkToken, config } = useTokenHandler();
  const [dummy, setDummy] = useState([
    {
      date: "2024-06-01",
      title: "여름의 한가운데에서 느낀 슬픔",
      content: "진짜 아주 긴 내용1",
      short_emotion: "한 줄 감정 결과1",
      emotion_type: HappyImage,
      detailed_emotion: "6월 1일의 피드백 내용",
      emotionData: [
        {
          emotion: "행복",
          percent: "47%",
          src: HappyImage,
        },
        {
          emotion: "분노",
          percent: "3%",
          src: AngryImage,
        },
        {
          emotion: "슬픔",
          percent: "20%",
          src: SadImage,
        },
        {
          emotion: "놀람",
          percent: "0%",
          src: SurprisedImage,
        },
        {
          emotion: "중립",
          percent: "30%",
          src: BoringImage,
        },
      ],
    },
    {
      date: "2024-06-16",
      title: "여름의 한가운데에서 느낀 분노",
      content:
        "오늘은 정말 더운 여름날이었다. 아침부터 찌는 듯한 더위에 잠에서 깼다. 요즘 날씨가 너무 더워서 에어컨 없이는 버틸 수가 없다. 오전에는 집 근처 카페에 가서 일을 했다. 카페에서 마신 아이스 아메리카노가 시원하고 달콤해서 기분이 좋았다. 카페에서 일하는 동안 생각보다 많은 일을 끝내서 뿌듯했다. 점심으로는 친구와 약속이 있어서 만났는데, 오랜만에 만나서 그런지 수다를 떨다 보니 시간이 금방 갔다. 친구와의 대화는 항상 큰 위안이 된다. 서로의 고민도 나누고, 웃고 떠들면서 한결 마음이 가벼워졌다. 저녁은 집에서 샐러드와 닭가슴살로 간단히 해결했다. 식사 후에는 좋아하는 드라마를 보며 하루를 마무리했다. 드라마를 보면서 잠시나마 현실에서 벗어날 수 있어서 좋았다. 오늘 하루를 이렇게 일기로 쓰면서 정리하니 마음이 한결 가벼워진다.",
      short_emotion: "한 줄 감정 결과2",
      emotion_type: HappyImage,
      detailed_emotion: "6월 16일의 피드백 내용",
      emotionData: [
        {
          emotion: "행복",
          percent: "10%",
          src: HappyImage,
        },
        {
          emotion: "분노",
          percent: "10%",
          src: AngryImage,
        },
        {
          emotion: "슬픔",
          percent: "10%",
          src: SadImage,
        },
        {
          emotion: "놀람",
          percent: "10%",
          src: SurprisedImage,
        },
        {
          emotion: "중립",
          percent: "60%",
          src: BoringImage,
        },
      ],
    },
    {
      date: "2024-07-17",
      title: "여름의 한가운데에서 느낀 절망",
      content: "진짜 아주 긴 내용3",
      short_emotion: "한 줄 감정 결과3",
      emotion_type: HappyImage,
      detailed_emotion: "7월 17일의 피드백 내용",
      emotionData: [
        {
          emotion: "행복",
          percent: "100%",
          src: HappyImage,
        },
        {
          emotion: "분노",
          percent: "0%",
          src: AngryImage,
        },
        {
          emotion: "슬픔",
          percent: "0%",
          src: SadImage,
        },
        {
          emotion: "놀람",
          percent: "0%",
          src: SurprisedImage,
        },
        {
          emotion: "중립",
          percent: "30%",
          src: BoringImage,
        },
      ],
    },
    {
      date: "2024-07-20",
      title: "여름의 한가운데에서 느낀 절망",
      content: "진짜 아주 긴 내용4",
      short_emotion: "한 줄 감정 결과4",
      emotion_type: SurprisedImage,
      detailed_emotion: "7월 20일의 피드백 내용",
      emotionData: [
        {
          emotion: "행복",
          percent: "47%",
          src: HappyImage,
        },
        {
          emotion: "분노",
          percent: "3%",
          src: AngryImage,
        },
        {
          emotion: "슬픔",
          percent: "20%",
          src: SadImage,
        },
        {
          emotion: "놀람",
          percent: "0%",
          src: SurprisedImage,
        },
        {
          emotion: "중립",
          percent: "30%",
          src: BoringImage,
        },
      ],
    },
    {
      date: "2024-07-27",
      title: "여름의 한가운데에서 느낀 절망",
      content: "진짜 아주 긴 내용5",
      short_emotion: "한 줄 감정 결과5",
      emotion_type: BoringImage,
      detailed_emotion: "7월 27일의 피드백 내용",
      emotionData: [
        {
          emotion: "행복",
          percent: "47%",
          src: HappyImage,
        },
        {
          emotion: "분노",
          percent: "3%",
          src: AngryImage,
        },
        {
          emotion: "슬픔",
          percent: "20%",
          src: SadImage,
        },
        {
          emotion: "놀람",
          percent: "0%",
          src: SurprisedImage,
        },
        {
          emotion: "중립",
          percent: "30%",
          src: BoringImage,
        },
      ],
    },
  ]);
  const [thisweekData, setThisweekData] = useState([
    { id: "Happy", label: "기쁨", value: 50, color: "#FFE75C" },
    { id: "Sad", label: "슬픔", value: 20, color: "#3293D7" },
    { id: "Angry", label: "분노", value: 5, color: "#FF6262" },
    { id: "Surprised", label: "놀람", value: 15, color: "#FEBB00" },
    { id: "Boring", label: "중립", value: 10, color: "#C6C6C6" },
  ]);

  // 지난 주 감정 데이터(더미)
  const [lastweekData, setLastweekData] = useState([
    { id: "Happy", label: "기쁨", value: 30, color: "#FFE75C" },
    { id: "Sad", label: "슬픔", value: 2, color: "#3293D7" },
    { id: "Angry", label: "분노", value: 15, color: "#FF6262" },
    { id: "Surprised", label: "놀람", value: 5, color: "#FEBB00" },
    { id: "Boring", label: "중립", value: 20, color: "#C6C6C6" },
  ]);

  // 감정 데이터
  const [emotionData, setEmotionData] = useState([
    {
      emotion: "행복",
      percent: "47%",
      src: HappyImage,
    },
    {
      emotion: "분노",
      percent: "3%",
      src: AngryImage,
    },
    {
      emotion: "슬픔",
      percent: "20%",
      src: SadImage,
    },
    {
      emotion: "놀람",
      percent: "0%",
      src: SurprisedImage,
    },
    {
      emotion: "중립",
      percent: "30%",
      src: BoringImage,
    },
  ]);

  // 감정 피드백 데이터(더미)
  const [feedbackData, setFeedbackData] = useState(
    "행복 : 주간 동안의 평균 행복 감정 비율은 47%로, 전체적으로 긍정적인 감정이 주를 이루었습니다. 특히 월요일과 토요일에 행복감을 크게 느꼈고, 금요일에도 상당한 행복감을 경험했습니다. 이는 일주일 동안 긍정적인 사건들이 많았음을 의미합니다. \n슬픔 : 슬픔의 비율은 20%로, 주중에 감정적으로 어려운 날들이 있었습니다. 화요일과 목요일이 특히 슬픔을 느끼는 날이었으며, 이는 일의 스트레스나 개인적인 문제에서 기인했을 가능성이 큽니다. \n분노 : 분노는 3%로 매우 낮은 비율을 보였으며, 주 중 일부 날에만 미세하게 나타났습니다. 이는 상대적으로 평온한 주였음을 나타냅니다. \n중립 : 중립적인 감정 상태는 30%로, 하루 중 감정이 크게 변화하지 않거나 일상적인 상황에서 기분이 안정적이었던 날들이 많았습니다. 이는 주의 대부분이 감정의 큰 파동 없이 지나갔다는 것을 의미합니다. \n놀람 : 놀람은 없었습니다. 주간 동안 특별히 예기치 않은 사건이나 강한 감정적 반응을 유발한 상황은 없었던 것으로 보입니다. \n종합적으로 보면, 이번 주는 행복과 중립적인 감정이 주요한 특징이었으며, 슬픔과 분노는 상대적으로 낮은 비율을 보였습니다. 이는 전반적으로 긍정적인 경험이 많았던 주였음을 나타내지만, 특정 날에 감정적으로 어려운 순간들도 있었음을 시사합니다."
  );
  const [currentDate, setCurrentDate] = useState(new Date());
  const [clickDay, setClickDay] = useState(false);

  const getYearMonthDay = useCallback((date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }, []);

  const getFeedbackData = async () => {
    try {
      checkToken();
      const res = await API.get(`/api/v1/weekly-emotion`, {
        params: {
          endDate: getYearMonthDay(currentDate),
        },
      }
      , config);
      console.log(res);
      // setFeedbackData(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="main-container">
      <h1>EMOTION ANALYSIS</h1>
      <div className="analysis-container">
        <div className="chart-container">
          <Chart data={thisweekData} isThisWeek={true} />
          <Chart data={lastweekData} isThisWeek={false} />
        </div>
        <div className="weekly-container">
          <div className="weekly-calendar-container">
            <WeeklyCalendar
              dummy={dummy}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              getYearMonthDay={getYearMonthDay}
              setClickDay={setClickDay}
              clickDay={clickDay}
              viewMode={"week"}
            />
          </div>
          <div className="feedback-content">
            <div className="feedback-title">주간 감정 피드백</div>
            <Emotion emotionData={emotionData} type="weekly" />
            <p>{feedbackData}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyzePage;

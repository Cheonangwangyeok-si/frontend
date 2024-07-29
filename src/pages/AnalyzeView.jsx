import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";
import Emotion from "../components/Emotion";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";

const AnalyzeView = () => {
  // 지난 주 감정 데이터(더미)
  const [lastweekData, setLastweekData] = useState([
    { id: "기쁨", label: "기쁨", value: 30 },
    { id: "슬픔", label: "슬픔", value: 20 },
    { id: "분노", label: "분노", value: 15 },
    { id: "두려움", label: "두려움", value: 10 },
    { id: "혐오", label: "혐오", value: 5 },
    { id: "놀람", label: "놀람", value: 20 },
  ]);

  // 이번 주 감정 데이터(더미)
  const [thisweekData, setThisweekData] = useState([
    { id: "기쁨", label: "기쁨", value: 20 },
    { id: "슬픔", label: "슬픔", value: 10 },
    { id: "분노", label: "분노", value: 25 },
    { id: "두려움", label: "두려움", value: 5 },
    { id: "혐오", label: "혐오", value: 10 },
    { id: "놀람", label: "놀람", value: 30 },
  ]);

  // 일기 데이터(더미)
  const [feedbackData, setFeedbackData] = useState(
    "행복 : 주간 동안의 평균 행복 감정 비율은 47%로, 전체적으로 긍정적인 감정이 주를 이루었습니다. 특히 월요일과 토요일에 행복감을 크게 느꼈고, 금요일에도 상당한 행복감을 경험했습니다. 이는 일주일 동안 긍정적인 사건들이 많았음을 의미합니다. \n슬픔 : 슬픔의 비율은 20%로, 주중에 감정적으로 어려운 날들이 있었습니다. 화요일과 목요일이 특히 슬픔을 느끼는 날이었으며, 이는 일의 스트레스나 개인적인 문제에서 기인했을 가능성이 큽니다. \n분노 : 분노는 3%로 매우 낮은 비율을 보였으며, 주 중 일부 날에만 미세하게 나타났습니다. 이는 상대적으로 평온한 주였음을 나타냅니다. \n중립 : 중립적인 감정 상태는 30%로, 하루 중 감정이 크게 변화하지 않거나 일상적인 상황에서 기분이 안정적이었던 날들이 많았습니다. 이는 주의 대부분이 감정의 큰 파동 없이 지나갔다는 것을 의미합니다. \n놀람 : 놀람은 없었습니다. 주간 동안 특별히 예기치 않은 사건이나 강한 감정적 반응을 유발한 상황은 없었던 것으로 보입니다. \n종합적으로 보면, 이번 주는 행복과 중립적인 감정이 주요한 특징이었으며, 슬픔과 분노는 상대적으로 낮은 비율을 보였습니다. 이는 전반적으로 긍정적인 경험이 많았던 주였음을 나타내지만, 특정 날에 감정적으로 어려운 순간들도 있었음을 시사합니다."
  );

  const getLastweekData = () => {
    //TODO: 지난 주 데이터 가져오기
  };
  const getThisweekData = () => {
    //TODO: 이번 주 데이터 가져오기
  };
  const getDiaryData = () => {
    //TODO: 일기 데이터 가져오기
  };

  // useEffect(() => {
  //   getLastweekData();
  //   getThisweekData();
  //   getDiaryData();
  // }, []);

  return (
    <div className="analysis-page">
      <div className="analysis-title">
        <p>EMOTION ANALYSIS</p>
      </div>
      <div className="analysis-container">
        <div className="chart-container">
          <div className="chart">
            <div className="chart-title">THIS WEEK</div>
            <Chart data={lastweekData} />
          </div>
          <div className="chart">
            <div className="chart-title">LAST WEEK</div>
            <Chart data={thisweekData} />
          </div>
        </div>
        <div className="calendar-container">
          <div className="feedback-content">
            <div className="calendar-title">주간 감정 피드백</div>
            <div className="emotion-container">
              <Emotion
                emotionName="행복"
                emotionSrc={HappyImage}
                percent="47%"
              />
              <Emotion
                emotionName="분노"
                emotionSrc={AngryImage}
                percent="3%"
              />
              <Emotion emotionName="슬픔" emotionSrc={SadImage} percent="20%" />
              <Emotion
                emotionName="놀람"
                emotionSrc={SurprisedImage}
                percent="0%"
              />
              <Emotion
                emotionName="중립"
                emotionSrc={BoringImage}
                percent="30%"
              />
            </div>
            <p>{feedbackData}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyzeView;

import React, { useState, useCallback, useEffect} from "react";
import DiaryList from "../components/DiaryList";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";
const DiaryPage = () => {
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
  const [clickDay, setClickDay] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeComponent, setActiveComponent] = useState("calendar");

  return (
    <div className="main-container">
      <h1>MY EMOTIONAL DIARY</h1>
      <DiaryList
        diaryData={dummy}
        setDummy={setDummy}
        setClickDay={setClickDay}
        setCurrentDate={setCurrentDate}
        setActiveComponent={setActiveComponent}
      />
    </div>
  );
}

export default DiaryPage;

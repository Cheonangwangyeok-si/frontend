import React, { useState } from "react";
import DateSelect from "../components/DateSelect";
import Emotion from "../components/Emotion";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";
import InputForm from "../components/InputForm";

const DiaryEntryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
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
  const [emotion, setEmotion] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="main-container">
      <h1>WRITE AN EMOTIONAL DIARY</h1>
      <DateSelect currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <label>오늘의 감정</label>
      <Emotion emotionData={emotionData} type="input" setEmotion={setEmotion} />
      <InputForm
        label="제목"
        placeholder="제목을 입력해주세요."
        value={title}
        setValue={setTitle}
      />
      <InputForm
        label="내용"
        placeholder="내용을 입력해주세요."
        value={content}
        setValue={setContent}
      />

      <button
        className="submit-button"
        onClick={() => console.log({ currentDate, emotion, title, content })}
      >
        일기 작성 완료
      </button>
    </div>
  );
};

export default DiaryEntryPage;

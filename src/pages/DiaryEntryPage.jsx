import React, { useEffect, useState } from "react";
import DateSelect from "../components/DateSelect";
import Emotion from "../components/Emotion";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";
import SelectHappyImage from "../images/Select_Happy.png";
import SelectAngryImage from "../images/Select_Angry.png";
import SelectSadImage from "../images/Select_Sad.png";
import SelectSurprisedImage from "../images/Select_Surprised.png";
import SelectBoringImage from "../images/Select_Boring.png";
import InputForm from "../components/InputForm";
import "../styles/DiaryEntryPage.scss";

const DiaryEntryPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // 감정 데이터
  const emotionImages = {
    행복: { normal: HappyImage, selected: SelectHappyImage },
    분노: { normal: AngryImage, selected: SelectAngryImage },
    슬픔: { normal: SadImage, selected: SelectSadImage },
    놀람: { normal: SurprisedImage, selected: SelectSurprisedImage },
    중립: { normal: BoringImage, selected: SelectBoringImage },
  };

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
  const [selectEmotion, setSelectEmotion] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const checkEmotion = (emotion) => {
    return emotionImages[emotion]?.selected || "";
  };

  useEffect(() => {
    setEmotionData(
      emotionData.map((data) => {
        if (data.emotion === selectEmotion) {
          return {
            ...data,
            src: checkEmotion(data.emotion),
          };
        }
        return {
          ...data,
          src: emotionImages[data.emotion].normal,
        };
      })
    );
  }, [selectEmotion]);

  return (
    <div className="main-container" style={{ width: "1063px" }}>
      <div className="title">
        <h1>WRITE AN EMOTIONAL DIARY</h1>
        <button
          className="submit-button"
          onClick={() =>
            console.log({ currentDate, selectEmotion, title, content })
          }
        >
          일기 작성 완료
        </button>
      </div>
      <div className="top-content">
        <DateSelect currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <div className="emotion">
          <label>오늘의 감정</label>
          <Emotion
            emotionData={emotionData}
            type="input"
            setEmotion={setSelectEmotion}
          />
        </div>
      </div>
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
    </div>
  );
};

export default DiaryEntryPage;

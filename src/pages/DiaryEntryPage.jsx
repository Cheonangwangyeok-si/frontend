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
import axios from "axios";
import useTokenHandler from "../layout/Header/useTokenHandler";
import "../styles/DiaryEntryPage.scss";

const DiaryEntryPage = () => {
  const { checkToken, config } = useTokenHandler();
  const [currentDate, setCurrentDate] = useState(new Date());
  // 감정 데이터
  const emotionImages = {
    행복: { normal: HappyImage, selected: SelectHappyImage },
    분노: { normal: AngryImage, selected: SelectAngryImage },
    슬픔: { normal: SadImage, selected: SelectSadImage },
    놀람: { normal: SurprisedImage, selected: SelectSurprisedImage },
    중립: { normal: BoringImage, selected: SelectBoringImage },
  };

  const [missingDays, setMissingDays] = useState([]);

  const [emotionData, setEmotionData] = useState([
    {
      id: "HAPPINESS",
      emotion: "행복",
      percent: "47%",
      src: HappyImage,
    },
    {
      id: "ANGER",
      emotion: "분노",
      percent: "3%",
      src: AngryImage,
    },
    {
      id: "SADNESS",
      emotion: "슬픔",
      percent: "20%",
      src: SadImage,
    },
    {
      id: "SURPRISE",
      emotion: "놀람",
      percent: "0%",
      src: SurprisedImage,
    },
    {
      id: "NEUTRAL",
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
    console.log(selectEmotion);
    setEmotionData(
      emotionData.map((data) => {
        if (data.id === selectEmotion) {
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

  const postDiary = async () => {
    if (!title || !content || !selectEmotion) {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    try {
      checkToken();
      const res = await axios.post(
        `/api/v1/diary`,
        {
          diaryAt: currentDate,
          title: title,
          content: content,
          emotionType: selectEmotion,
        },
        config
      );

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const findMissingDays = async () => {
    try {
      checkToken();
      console.log("findMissingDays");
      const res = await axios.get(`/api/v1/diary/missing-days`, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findMissingDays();
  }, [currentDate]);

  return (
    <div className="main-container" style={{ width: "1063px" }}>
      <div className="title">
        <h1>WRITE AN EMOTIONAL DIARY</h1>
        <button className="submit-button" onClick={() => postDiary()}>
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

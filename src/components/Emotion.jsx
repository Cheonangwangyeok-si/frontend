import React from "react";
import "../styles/Emotion.scss";
import { da } from "date-fns/locale";

function Emotion({ emotionData, type, setEmotion }) {
  return (
    <div className="emotion-container">
      { emotionData.map((data) => (
      <div className="emotion-content">
        {type === "input" ? <img src={data.src} key={data.emotion} onClick={() => setEmotion(data.emotion)}  /> : <img src={data.src} />}
        {type === "weekly" &&<div className="emotion-title">
          <p>{data.emotion}</p>
          <p style={{ fontWeight: "bold" }}>{data.percent}</p>
        </div>}
      </div>
      ))}
    </div>
  );
}

export default Emotion;
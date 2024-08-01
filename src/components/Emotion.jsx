import React, { useEffect } from "react";
import "../styles/Emotion.scss";

function Emotion({ emotionData, type, setEmotion }) {
  const onClick = (emotion) => {
    switch (emotion) {
      case "행복":
        setEmotion("HAPPINESS");
        return;
      case "분노":
        setEmotion("ANGER");
        return;
      case "슬픔":
        setEmotion("SADNESS");
        return;
      case "놀람":
        setEmotion("SURPRISE");
        return;
      case "중립":
        setEmotion("NEUTRAL");
        return;
      default:
        setEmotion("");
        return;
    }
  };

  return (
    <div className={`emotion-container ${type === "input" ? "input" : ""}`}>
      {emotionData.map((data) => (
        <div
          className={`emotion-content ${type === "input" ? "input" : "weekly"}`}
        >
          {type === "input" && (
            <img src={data.src} onClick={() => onClick(data.emotion)} />
          )}
          {type === "weekly" && (
            <div className="emotion-content">
              <img src={data.src} />
              <div className="emotion-title">
                <p>{data.emotion}</p>
                <p style={{ fontWeight: "bold" }}>{data.percent}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Emotion;

import React from "react";
import "../styles/Emotion.scss";

function Emotion({ emotionData, type, setEmotion }) {
  return (
    <div
      className={`emotion-container ${type === "input" ? "input" : ""}`}
    >
      {emotionData.map((data) => (
        <div
          className={`emotion-content ${type === "input" ? "input" : "weekly"}`}
        >
          {type === "input" && (
            <img src={data.src} onClick={() => setEmotion(data.emotion)} />
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

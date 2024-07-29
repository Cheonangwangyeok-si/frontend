import React from "react";
import "../styles/Emotion.scss";

function Emotion({ emotioData = [] }) {
  return (
    <div className="emotion-container">
      {emotioData.map((data) => (
        <div className="emotion-content">
          <img src={data.src} />
          <div className="emotion-title">
            <p>{data.emotion}</p>
            <p style={{ fontWeight: "bold" }}>{data.percent}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Emotion;
import React, { useState } from 'react';
import '../styles/DayFeedback.scss';

const DayFeedback = ({ dayDiaryInfo, Emotion }) => {

    return (
        <div className="day-feedback-container">
            < h3 > AI 감정 피드백</h3 >
            <Emotion emotioData={dayDiaryInfo?.emotionData} type="weekly" setEmotion={undefined} />
            <p>{dayDiaryInfo?.detailed_emotion}</p>
        </div >
    );
};

export default DayFeedback;
import { useState } from 'react';
import '../styles/DayFeedback.scss';
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";

const DayFeedback = ({ dayDiaryInfo }) => {
    const [dummyData, setDummyData] = useState(
        {
            diary_id: '1',
            title: "일기 제목1",
            content: "일기 내용1",
            dateAt: "2024-07-31",
            emotionType: SurprisedImage,
            happiness: 10,
            sadness: 10,
            anger: 10,
            surprise: 60,
            neutral: 10,
            detailed_emotion: "자센한 감정 분석 결과1",
            shortFeedback: "한 줄 감정 결과1",
        }
    );

    return (
        <div className="day-feedback-container">
            <p className='day-feedback-title'> AI 감정 피드백</p >
            <div className='day-feedback-emotionbox'>
                <div className='day-feedback-emotion'>
                    <img src={HappyImage} alt="happiness" />
                    <p className='day-feedback-emotion-name'>행복</p>
                    <b>{dummyData.happiness}%</b>
                </div>
                <hr />
                <div className='day-feedback-emotion'>
                    <img src={AngryImage} alt="anger" />
                    <p>분노</p>
                    <b>{dummyData.anger}%</b>
                </div>
                <hr />
                <div className='day-feedback-emotion'>
                    <img src={SadImage} alt="sadness" />
                    <p>슬픔</p>
                    <b>{dummyData.sadness}%</b>
                </div>
                <hr />
                <div className='day-feedback-emotion'>
                    <img src={SurprisedImage} alt="surprise" />
                    <p>놀람</p>
                    <b>{dummyData.surprise}%</b>
                </div>
                <hr />
                <div className='day-feedback-emotion'>
                    <img src={BoringImage} alt="neutral" />
                    <p>중립</p>
                    <b>{dummyData.neutral}%</b>
                </div>
            </div>
            <p className='day-feedback-detailed_emotion'>{dummyData?.detailed_emotion}</p>
        </div >
    );
};

export default DayFeedback;
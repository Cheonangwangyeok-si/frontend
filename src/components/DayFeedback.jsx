import '../styles/DayFeedback.scss';
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";

const DayFeedback = ({ Info }) => {
    console.log(Info)
    return (
        <div className="day-feedback-container">
            <p className='day-feedback-title'> AI 감정 피드백</p >
            <div className='day-feedback-emotionbox'>
                <div className='day-feedback-emotion'>
                    <img src={HappyImage} alt="happiness" />
                    <p className='day-feedback-emotion-name'>행복</p>
                    <b>{Info?.happiness}%</b>
                </div>
                <hr />
                <div className='day-feedback-emotion'>
                    <img src={AngryImage} alt="anger" />
                    <p>분노</p>
                    <b>{Info?.anger}%</b>
                </div>
                <hr />
                <div className='day-feedback-emotion'>
                    <img src={SadImage} alt="sadness" />
                    <p>슬픔</p>
                    <b>{Info?.sadness}%</b>
                </div>
                <hr />
                <div className='day-feedback-emotion'>
                    <img src={SurprisedImage} alt="surprise" />
                    <p>놀람</p>
                    <b>{Info?.surprise}%</b>
                </div>
                <hr />
                <div className='day-feedback-emotion'>
                    <img src={BoringImage} alt="neutral" />
                    <p>중립</p>
                    <b>{Info?.neutral}%</b>
                </div>
            </div>
            <p className='day-feedback-detailed_emotion'>{Info?.detailedEmotion}</p>
        </div >
    );
};

export default DayFeedback;
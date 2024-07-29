import '../styles/DayFeedback.scss';

const DayFeedback = ({ dayDiaryInfo, Emotion }) => {

    return (
        <div className="day-feedback-container">
            <p className='day-feedback-title'> AI 감정 피드백</p >
            <Emotion emotioData={dayDiaryInfo?.emotionData} />
            <p className='day-feedback-detailed_emotion'>{dayDiaryInfo?.detailed_emotion}</p>
        </div >
    );
};

export default DayFeedback;
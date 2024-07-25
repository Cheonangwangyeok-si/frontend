import React from 'react';
import '../styles/DiaryInfo.scss';


const DiaryInfo = ({ id, dayDiaryInfo, setDummy, diaryData, setClickDay }) => {

    const onDelete = () => {
        const nextDummy = diaryData.filter(
            item => item.date !== id
        );
        setDummy(nextDummy);
        setClickDay(false);
    }

    return (
        <div className='dayDiary-container'>
            <div className='dayDiary-date'>{id.replace(/-/g, '.')}</div>
            <div>{dayDiaryInfo?.title}</div>
            <div>{dayDiaryInfo?.sumContent}</div>
            <div>{dayDiaryInfo?.content}</div>
            <img src={dayDiaryInfo?.emotion} />
            <button onClick={onDelete}>삭제</button>
        </div >
    );
};

export default DiaryInfo;
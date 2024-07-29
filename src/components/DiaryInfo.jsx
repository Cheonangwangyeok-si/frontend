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
            <div className='dayDiary-title'>{dayDiaryInfo?.title}</div>
            <div className='dayDiary-short_emotion'>{dayDiaryInfo?.short_emotion}</div>
            <div className='dayDiary-content'>{dayDiaryInfo?.content}</div>
            <img className='dayDiary-img' src={dayDiaryInfo?.emotion_type} />
            <button className='dayDiary-delete' onClick={onDelete} >삭제</button>
        </div >
    );
};

export default DiaryInfo;
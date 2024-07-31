import React, { useEffect } from 'react';
import '../styles/DiaryInfo.scss';
import axios from 'axios';

const DiaryInfo = ({ id, dayDiaryInfo, setDummy, diaryData, setClickDay }) => {

    const onDelete = () => {
        const nextDummy = diaryData.filter(
            item => item.dateAt !== id
        );
        setDummy(nextDummy);
        setClickDay(false);

        // try {
        //     const res = await axios.delete(`http://15.165.116.155:8080/api/v1/diary/date/${id}`);
        //     console.log(res.data);
        // } catch (err) {
        //     console.log(err);
        // }
    }

    useEffect(() => {
        const getDiaryInfo = async () => {
            try {
                const res = axios.get(`http://15.165.116.155:8080/api/v1/diary/date/${id}`);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        //getDiaryInfo();
    }, []);

    return (
        <div className='dayDiary-container'>
            <div className='dayDiary-date'>{id.replace(/-/g, '.')}</div>
            <div className='dayDiary-title'>{dayDiaryInfo?.title}</div>
            <div className='dayDiary-short_emotion'>{dayDiaryInfo?.shortFeedback}</div>
            <div className='dayDiary-content'>{dayDiaryInfo?.content}</div>
            <img className='dayDiary-img' src={dayDiaryInfo?.emotionType} />
            <button className='dayDiary-delete' onClick={onDelete} >삭제</button>
        </div >
    );
};

export default DiaryInfo;
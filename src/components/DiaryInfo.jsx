import React, { useEffect, useState } from 'react';
import '../styles/DiaryInfo.scss';
import axios from 'axios';
import DayFeedback from "../components/DayFeedback";
import useTokenHandler from '../layout/Header/useTokenHandler';

const DiaryInfo = ({ id, diaryId, setDummy, diaryData, setClickDay }) => {
  const { checkToken } = useTokenHandler();
    const [diaryInfo, setDiaryInfo] = useState(
        // {
        //     diaryId: '1',
        //     title: "일기 제목1",
        //     content: "일기 내용1",
        //     dateAt: "2024-07-31",
        //     emotionType: SurprisedImage,
        //     happiness: 10,
        //     sadness: 10,
        //     anger: 10,
        //     surprise: 60,
        //     neutral: 10,
        //     detailedFeedback: "자센한 감정 분석 결과1",
        //     shortFeedback: "한 줄 감정 결과1",
        // }
    );
    
    const onDelete = async () => {
        const nextDummy = diaryData.filter(
            item => item.dateAt !== id
        );
        setDummy(nextDummy);
        setClickDay(false);

        try {
            checkToken();
            const res = await axios.delete(`/api/v1/diary`,{
                params: {
                    diary_id:diaryId
                  },
                headers: {
                    Authorization: `${localStorage.getItem("accessToken")}`,
              },});
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const getDiaryInfo = async () => {
            try {
                checkToken();
                const res = await axios.get(`/api/v1/diary`,
                    { params: {
                        diary_id: diaryId
                      },
                      headers: {
                        Authorization: `${localStorage.getItem("accessToken")}`,
                      },
                    }
                );
                setDiaryInfo(res.data);
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getDiaryInfo();
    }, []);
    
    return (
        <div>
            <div className='dayDiary-container'>
                <div className='dayDiary-date'>{diaryInfo?.diaryAt.replace(/-/g, '.')}</div>
                <div className='dayDiary-title'>{diaryInfo?.title}</div>
                <div className='dayDiary-short_emotion'>{diaryInfo?.shortFeedback}</div>
                <div className='dayDiary-content'>{diaryInfo?.content}</div>
                <img className='dayDiary-img' src={diaryInfo?.emotionType} />
                <button className='dayDiary-delete' onClick={onDelete} >삭제</button>
            </div >
            <DayFeedback DiaryInfo={DiaryInfo}/>
        </div>
    );
};

export default DiaryInfo;
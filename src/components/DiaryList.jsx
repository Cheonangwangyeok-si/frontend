import React from 'react';
import "../styles/DiaryList.scss";
import Trash from "../images/DiaryViewImage/Trash.png";

const DiaryList = ({ diaryData, setDummy, setCurrentDate, setClickDay, setActiveComponent }) => {

    const handleClick = (date) => {
        setCurrentDate(new Date(date));
        setClickDay(true);
        setActiveComponent("calendar");
    };

    const onDelete = (id, e) => {
        e.stopPropagation();
        const nextDummy = diaryData.filter(
            item => item.date !== id
        );
        setDummy(nextDummy);
    }

    return (
        <div className='diaryList-container'>
            <div className='sort-options'>
                <input type="text" placeholder='검색' />
                <select id="sortDate" className='sort-select'>
                    <option value="" disabled selected>날짜</option>
                    <option value="Asc">오름차순</option>
                    <option value="Desc">내림차순</option>
                </select>
                <select id="sortEmotion" className='sort-select'>
                    <option value="default">감정</option>
                    <option value="happy">행복</option>
                    <option value="angry">분노</option>
                    <option value="sad">슬픔</option>
                    <option value="surprised">놀람</option>
                    <option value="boring">중립</option>
                </select>
                <select id="sortRecent" className='sort-select'>
                    <option value="recent">최신순</option>
                    <option value="old">오래된순</option>
                </select>
            </div>
            <div className='diary-container'>
                <div className='diary-check'></div>
                <hr />
                <div className='diary-lists'>
                    {diaryData.map((diary) => (
                        <div className='diary-list'>
                            <div>체크박스</div>
                            <div className='diary-box' onClick={() => { handleClick(diary.date) }}>
                                <img className='diary-emotion' src={diary.emotion_type} />
                                <div className='diary-content'>
                                    <h3>{diary.title}</h3>
                                    <p>{diary.content}</p>
                                    <p>{diary.date.replace(/-/g, '.')} <b>·</b> {diary.short_emotion}</p>
                                </div>
                                <img className='diary-trash' src={Trash} onClick={(e) => { onDelete(diary.date, e) }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiaryList;
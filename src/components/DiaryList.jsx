import React, { useEffect, useState } from 'react';
import "../styles/DiaryList.scss";
import Trash from "../images/DiaryViewImage/Trash.png";
import Trash1 from "../images/DiaryViewImage/Trash1.png";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";

const emotionTypes = {
    [HappyImage]: 'happy',
    [AngryImage]: 'angry',
    [SadImage]: 'sad',
    [SurprisedImage]: 'surprised',
    [BoringImage]: 'boring'
};

const DiaryList = ({ diaryData, setDummy, setCurrentDate, setClickDay, setActiveComponent }) => {
    const [checkDiarys, setCheckDiarys] = useState([]);
    const [search, setSearch] = useState('');
    const [filterDiaryData, setFilterDiaryData] = useState([]);
    const [sort, setSort] = useState("Recent");
    const [filterEmotion, setFilterEmotion] = useState("default");

    useEffect(() => {
        let filteredData = diaryData.filter(diary =>
            diary.title.includes(search) || diary.content.includes(search)
        );

        if (filterEmotion !== "default") {
            filteredData = filteredData.filter(diary =>
                emotionTypes[diary.emotionType] === filterEmotion
            );
        }

        filteredData.sort((a, b) => {
            if (sort === "Recent") {
                return new Date(b.dateAt) - new Date(a.dateAt);
            } else {
                return new Date(a.dateAt) - new Date(b.dateAt);
            }
        });

        setFilterDiaryData(filteredData);
        setCheckDiarys([]);
    }, [search, filterEmotion, sort, diaryData]);

    const handleClick = (date) => {
        setCurrentDate(new Date(date));
        setClickDay(true);
        setActiveComponent("calendar");
    };

    const onDelete = (id, e) => {
        e.stopPropagation();
        const nextDummy = diaryData.filter(
            item => item.dateAt !== id
        );
        setDummy(nextDummy);
        setCheckDiarys(prev => prev.filter((checkDate) => checkDate !== id))
    }

    const onDeleteCheck = () => {
        const nextDummy = diaryData.filter(
            diary => !(checkDiarys.includes(diary.dateAt))
        );
        setDummy(nextDummy);
        setCheckDiarys([]);
    }

    const onCheck = (id, e) => {
        if (e.target.checked) {
            setCheckDiarys(prev => [...prev, id])
        } else {
            setCheckDiarys(prev => prev.filter((element) => element !== id))
        }
    }

    const onAllCheck = (e) => {
        if (e.target.checked) {
            const dateArr = [];
            filterDiaryData.forEach(diary =>
                dateArr.push(diary.dateAt)
            );
            setCheckDiarys(dateArr);
        } else {
            setCheckDiarys([]);
        }
    }

    return (
        <div className='diaryList-container'>
            <div className='sort-options'>
                <input type="text" placeholder='검색' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                <select id="sortEmotion" className='sort-select' value={filterEmotion} onChange={(e) => { setFilterEmotion(e.target.value) }}>
                    <option value="default">감정</option>
                    <option value="happy">행복</option>
                    <option value="angry">분노</option>
                    <option value="sad">슬픔</option>
                    <option value="surprised">놀람</option>
                    <option value="boring">중립</option>
                </select>
                <select id="sortRecent" className='sort-select' value={sort} onChange={(e) => { setSort(e.target.value) }}>
                    <option value="Recent">최신순</option>
                    <option value="Old">오래된순</option>
                </select>
            </div>
            <div className='diary-container1'>
                <div className='diary-check'>
                    <input type="checkbox" className='checkbox'
                        onChange={onAllCheck}
                        checked={(checkDiarys.length === filterDiaryData.length) && filterDiaryData.length}
                    />
                    <p>{filterDiaryData.length}개의 감정 일기</p>
                    <img src={Trash1} onClick={onDeleteCheck} />
                </div>
                <hr />
                <div className='diary-lists'>
                    {filterDiaryData.map((diary) => (
                        <div className='diary-list'>
                            <input type="checkbox" className='checkbox'
                                onChange={(e) => { onCheck(diary.dateAt, e) }}
                                checked={checkDiarys.includes(diary.dateAt)}
                            />
                            <div className='diary-box' onClick={() => { handleClick(diary.dateAt) }}>
                                <div className='diary-ec'>
                                    <img className='diary-emotion' src={diary.emotionType} />
                                    <div className='diary-contentbox'>
                                        <h3>{diary.title}</h3>
                                        <p className='diary-content'>{diary.content}</p>
                                        <p className='diary-date-short'>{diary.dateAt.replace(/-/g, '.')} <b>·</b> {diary.shortFeedback}</p>
                                    </div>
                                </div>
                                <img className='diary-trash' src={Trash} onClick={(e) => { onDelete(diary.dateAt, e) }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiaryList;
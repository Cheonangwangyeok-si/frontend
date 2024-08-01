import React, { useEffect, useState } from 'react';
import "../styles/DiaryList.scss";
import Trash from "../images/DiaryViewImage/Trash.png";
import Trash1 from "../images/DiaryViewImage/Trash1.png";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";
import axios from 'axios';
import useTokenHandler from '../layout/Header/useTokenHandler';

const emotionTypes = {
    "HAPPINESS": HappyImage,
    "ANGER": AngryImage,
    "SADNESS": SadImage,
    "SURPRISE": SurprisedImage,
    "NEUTRAL": BoringImage
};


const DiaryList = ({ diaryData, setDummy, setCurrentDate, setClickDay, setActiveComponent }) => {
    const { checkToken } = useTokenHandler();
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
                diary.emotionType === filterEmotion
            );
        }

        filteredData.sort((a, b) => {
            if (sort === "Recent") {
                return new Date(b.diaryAt) - new Date(a.diaryAt);
            } else {
                return new Date(a.diaryAt) - new Date(b.diaryAt);
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

    const onDelete = async (id, e, date) => {
        e.stopPropagation();
        
        const nextDummy = diaryData.filter(
            item => item.diaryAt !== date
        );
        
        try {
            checkToken();
            const res = await axios.delete(`/api/v1/diary/${id}`,{
                headers: {
                    Authorization: `${localStorage.getItem("accessToken")}`,
                },});
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        setDummy(nextDummy);
        setCheckDiarys(prev => prev.filter((checkDate) => checkDate !== date))
        }


        const onDeleteCheck =  async() => {
            const deleteDiaryRequests = checkDiarys.map(date => {
                const diary = diaryData.find(diary => diary.diaryAt === date);
                return diary ? {diaryId : diary.diaryId} : null;
            });
            if (deleteDiaryRequests.length === 0) return;
            console.log(deleteDiaryRequests)
            
            try {
                checkToken();
                const res = await axios.post(`/api/v1/diary/deleteSelectedDiarys`,
                    deleteDiaryRequests, {
                    headers: {
                        Authorization: `${localStorage.getItem("accessToken")}`,
                        "Content-Type":'application/json'
                    }
                });
                    console.log(res.data);
                } catch (err) {
                    console.log(err);
                }
            const nextDummy = diaryData.filter(
            diary => !(checkDiarys.includes(diary.diaryAt))
        );
        
        setDummy(nextDummy);
        setCheckDiarys([]);
    }

    const onCheck = (date, e) => {
        if (e.target.checked) {
            setCheckDiarys(prev => [...prev, date])
        } else {
            setCheckDiarys(prev => prev.filter((element) => element !== date))
        }
    }

    const onAllCheck = (e) => {
        if (e.target.checked) {
            const dateArr = [];
            filterDiaryData.forEach(diary =>
                dateArr.push(diary.diaryAt)
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
                    <option value="HAPPINESS">행복</option>
                    <option value="ANGER">분노</option>
                    <option value="SADNESS">슬픔</option>
                    <option value="SURPRISE">놀람</option>
                    <option value="NEUTRAL">중립</option>
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
                                onChange={(e) => { onCheck(diary.diaryAt, e) }}
                                checked={checkDiarys.includes(diary.diaryAt)}
                            />
                            <div className='diary-box' onClick={() => { handleClick(diary.diaryAt) }}>
                                <div className='diary-ec'>
                                    <img className='diary-emotion' src={emotionTypes[diary.emotionType]} />
                                    <div className='diary-contentbox'>
                                        <h3>{diary.title}</h3>
                                        <p className='diary-content'>{diary.content}</p>
                                        <p className='diary-date-short'>{diary.diaryAt.replace(/-/g, '.')} <b>·</b> {diary.shortFeedback}</p>
                                    </div>
                                </div>
                                <img className='diary-trash' src={Trash} onClick={(e) => { onDelete(diary.diaryId, e, diary.diaryAt) }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiaryList;
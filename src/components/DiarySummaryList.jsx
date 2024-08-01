import React, { useEffect, useState } from "react";
import "../styles/DiarySummaryList.scss";
import HappyImage from "../images/Happy.png";
import AngryImage from "../images/Angry.png";
import SadImage from "../images/Sad.png";
import SurprisedImage from "../images/Surprised.png";
import BoringImage from "../images/Boring.png";
import axios from "axios";
import useTokenHandler from "../layout/Header/useTokenHandler";

const emotionTypes = {
    "HAPPINESS": HappyImage,
    "ANGER": AngryImage,
    "SADNESS": SadImage,
    "SURPRISE": SurprisedImage,
    "NEUTRAL": BoringImage
};

function DiarySummaryList({ diaryData, setDummy, currentDate, setCurrentDate, setClickDay }) {
  const { checkToken } = useTokenHandler();
  const [sort, setSort] = useState("Asc");
  const [filterDiaryData, setFilterDiaryData] = useState([]);

  const handleClick = (date) => {
    setCurrentDate(new Date(date));
    setClickDay(true)
  };

  const onChange = (e) => {
    setSort(e.target.value);
  }

  useEffect(() => {
    const filteredData = [...diaryData].sort((a, b) => {
      if (sort === "Asc") {
        return new Date(a.diaryAt) - new Date(b.diaryAt);
      } else {
        return new Date(b.diaryAt) - new Date(a.diaryAt);
      }
    });
    setFilterDiaryData(filteredData);
  }, [sort, diaryData])

  const onDelete = async (date, e,id) => {
    e.stopPropagation();
    const nextDummy = diaryData.filter(
      item => item.diaryAt !== date
    );
    setDummy(nextDummy);
    setClickDay(false)

    try {
      checkToken();
      const res = await axios.delete(`/api/v1/diary`,{
          params: {
              diary_id: id
            },
          headers: {
              Authorization: `${localStorage.getItem("accessToken")}`,
        },});
      console.log(res.data);
  } catch (err) {
      console.log(err);
  }
  }
  
  return (
    <div className="diary-summary-container">
      <label name="listSort" className="sort-select">날짜
        <select id="listSort" value={sort} onChange={onChange}>
          <option value="Asc">오름차순</option>
          <option value="Desc">내림차순</option>
        </select>
      </label>
      <div className="diary-summary-list">
        {filterDiaryData.map((diary) => {
          return parseInt(diary.diaryAt.split('-')[1], 10) === currentDate.getMonth() + 1 ? (
            <div key={diary.diaryAt} className="diary-summary-content" onClick={() => handleClick(diary.diaryAt)}>
              <div className="diary-summary-test">
                <p className="diary-summary-date">{diary.diaryAt.replace(/-/g, '.')}</p>
                <p className="diary-summary-title">{diary.title}</p>
                <p className="diary-summary-sumContent">{diary.shortFeedback}</p>
              </div>
              <div className="diary-summary-right">
                <div className="diary-summary-delete"
                  onClick={(e) => { onDelete(diary.diaryAt, e,diary.diaryId) }}>삭제</div>
                <img src={emotionTypes[diary.emotionType]} />
              </div>
            </div>
          ) : null
        })}
      </div>
    </div>
  );
}

export default DiarySummaryList;
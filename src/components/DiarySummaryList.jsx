import React, { useEffect, useState } from "react";
import "../styles/DiarySummaryList.scss";

function DiarySummaryList({ diaryData, setDummy, currentDate, setCurrentDate, setClickDay }) {
  const [sort, setSort] = useState("Asc");

  const handleClick = (date) => {
    setCurrentDate(new Date(date));
    setClickDay(true)
  };

  const onChange = (e) => {
    setSort(e.target.value);
  }

  useEffect(() => {
    const sortData = [...diaryData].sort((a, b) => {
      if (sort === "Asc") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
    setDummy(sortData);
  }, [sort])

  const onDelete = (id, e) => {
    e.stopPropagation();
    const nextDummy = diaryData.filter(
      item => item.date !== id
    );
    setDummy(nextDummy);
    setClickDay(false)
  }

  return (
    <div className="diary-summary-container">
      <select id="listSort" value={sort} onChange={onChange}>
        <option value="Asc">날짜 오름차순</option>
        <option value="Desc">날짜 내림차순</option>
      </select>
      <div className="diary-summary-list">
        {diaryData.map((diary) => {
          return parseInt(diary.date.split('-')[1], 10) === currentDate.getMonth() + 1 ? (
            <div key={diary.date} className="diary-summary-content" onClick={() => handleClick(diary.date)}>
              <div>
                <p className="diary-summary-date">{diary.date.replace(/-/g, '.')}</p>
                <p className="diary-summary-title">{diary.title}</p>
                <p className="diary-summary-sumContent">{diary.short_emotion}</p>
              </div>
              <div className="diary-summary-right">
                <div className="diary-summary-delete"
                  onClick={(e) => { onDelete(diary.date, e) }}>삭제</div>
                <img src={diary.emotion_type} />
              </div>
            </div>
          ) : null
        })}
      </div>
    </div>
  );
}

export default DiarySummaryList;
import React, { useEffect, useState } from "react";
import "../styles/DiarySummaryList.scss";

function DiarySummaryList({ diaryData, setDummy, currentDate, setCurrentDate, setClickDay }) {
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
        return new Date(a.dateAt) - new Date(b.dateAt);
      } else {
        return new Date(b.dateAt) - new Date(a.dateAt);
      }
    });
    setFilterDiaryData(filteredData);
  }, [sort, diaryData])

  const onDelete = (id, e) => {
    e.stopPropagation();
    const nextDummy = diaryData.filter(
      item => item.dateAt !== id
    );
    setDummy(nextDummy);
    setClickDay(false)
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
          return parseInt(diary.dateAt.split('-')[1], 10) === currentDate.getMonth() + 1 ? (
            <div key={diary.dateAt} className="diary-summary-content" onClick={() => handleClick(diary.dateAt)}>
              <div className="diary-summary-test">
                <p className="diary-summary-date">{diary.dateAt.replace(/-/g, '.')}</p>
                <p className="diary-summary-title">{diary.title}</p>
                <p className="diary-summary-sumContent">{diary.shortFeedback}</p>
              </div>
              <div className="diary-summary-right">
                <div className="diary-summary-delete"
                  onClick={(e) => { onDelete(diary.dateAt, e) }}>삭제</div>
                <img src={diary.emotionType} />
              </div>
            </div>
          ) : null
        })}
      </div>
    </div>
  );
}

export default DiarySummaryList;
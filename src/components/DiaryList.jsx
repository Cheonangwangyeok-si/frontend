import React, { useEffect, useState } from "react";
import "../styles/DiaryList.scss";

function DiaryList({ diaryData, setDummy }) {
  const [sort, setSort] = useState("Asc");

  const handleClick = (date) => {
    console.log("click", date);
    //TODO: 일기 상세 페이지로 이동
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

  const onDelete = (id) => {
    const nextDummy = diaryData.filter(
      item => item.date !== id
    );
    setDummy(nextDummy);
  }

  return (
    <div className="diary-summary-container">
      <select id="sort" value={sort} onChange={onChange}>
        <option value="Asc">날짜 오름차순</option>
        <option value="Desc">날짜 내림차순</option>
      </select>

      {diaryData.map((diary) => (
        <div key={diary.date} className="diary-summary" onClick={() => handleClick(diary.date)}>
          <div>
            <p className="diary-summary-date">{diary.date.replace(/-/g, '.')}</p>
            <p className="diary-summary-title">{diary.title}</p>
            <p className="diary-summary-sumContent">{diary.sumContent}</p>
          </div>
          <div className="diary-summary-right">
            <div className="diary-summary-delete"
              onClick={() => { onDelete(diary.date) }}>삭제</div>
            <img src={diary.emotion} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default DiaryList;
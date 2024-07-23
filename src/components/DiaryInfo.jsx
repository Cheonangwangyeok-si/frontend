import React from 'react';
import '../styles/DiaryInfo.scss';


const DiaryInfo = ({ id, data, setDummy, dummy }) => {

    const onDelete = () => {
        const nextDummy = dummy.filter(
            item => item.date !== id
        );
        setDummy(nextDummy);
    }

    return (
        <div className='diaryInfo'>
            <section>
                {id}
            </section>
            <section>
                <br />
                {data?.event}
                <br />

                <button onClick={onDelete}>삭제</button>
            </section>
        </div >
    );
};

export default DiaryInfo;
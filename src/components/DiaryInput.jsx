import React, { useEffect, useState } from 'react';
import '../styles/DiaryInput.scss';

const DiaryInput = ({ setDummy, dummy, id }) => {
    const [content, setContent] = useState('');

    const onChange = e => {
        setContent(e.target.value);
    }

    const onClick = e => {
        e.preventDefault();
        if (content === '') {
            alert('내용을 입력해주세요');
        } else {
            const inputData = {
                date: id,
                event: content,
            };
            const nextDummy = [...dummy, inputData];
            setDummy(nextDummy);
            setContent('');
        }
    }

    useEffect(() => {
        setContent('');
    }, [id]);

    return (
        <div className='diaryInput'>
            {id} 일기
            <form onSubmit={onClick}>
                <input name='content' value={content} onChange={onChange} />
                <button type='submit'>작성</button>
            </form>
        </div>
    );
};

export default DiaryInput;
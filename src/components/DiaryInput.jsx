import React, { useEffect, useState } from 'react';
import '../styles/DiaryInput.scss';

const DiaryInput = ({ setDummy, dummy, id, modifyEvent }) => {
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

            if (modifyEvent) {
                const nextDummy = dummy.map(item =>
                    item.date === id ? inputData : item
                );
                setDummy(nextDummy);
            } else {
                const nextDummy = [...dummy, inputData];
                setDummy(nextDummy);
            }
            setContent('');
        }
    }

    useEffect(() => {
        if (modifyEvent) {
            setContent(modifyEvent.event);
        } else {
            setContent('');
        }
    }, [modifyEvent, id]);

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
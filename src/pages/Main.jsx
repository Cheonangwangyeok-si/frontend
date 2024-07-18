import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();
    return (
        <div style={{ border: "1px solid black" }}>
            메인 페이지sss
            <button onClick={() => { navigate('/analyze') }}>분석뷰</button>
            <button onClick={() => { navigate('/calendar') }}>달력</button>
        </div>
    );
};

export default Main;
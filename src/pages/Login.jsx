import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/main');
    }

    return (
        <div style={{ border: "1px solid black" }}>
            로그인 화면
            <br />
            <button onClick={onClick}>로그인</button>
        </div>
    );
};

export default Login;
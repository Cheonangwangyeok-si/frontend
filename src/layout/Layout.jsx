import React from 'react';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <div style={{ border: "1px solid black" }}>
            레이아웃
            <Outlet />
        </div>
    );
};

export default Layout;
import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Main from '../pages/Main';
import Login from '../pages/Login';
import AnalyzeView from '../pages/AnalyzeView';
import CalendarView from '../pages/CalendarView';
import Layout from '../layout/Layout';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Login />
            },
            {
                path: "main",
                element: <Main />
            },
            {
                path: "analyze",
                element: <AnalyzeView />
            },
            {
                path: "calendar",
                element: <CalendarView />
            },
        ],
    },
]);

export default router;
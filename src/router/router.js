import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import AnalyzeView from "../pages/AnalyzeView";
import CalendarView from "../pages/CalendarView";
import Layout from "../layout/Layout";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "analyze",
        element: <AnalyzeView />,
      },
      {
        path: "calendar",
        element: <CalendarView />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;

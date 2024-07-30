import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import AnalyzeView from "../pages/AnalyzeView";
import DiaryView from "../pages/DiaryView";
import DiaryView2 from "../pages/DiaryView2";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "analyze",
        element: <AnalyzeView />,
      },
      {
        path: "diary",
        element: <DiaryView2 />,
      },
      // {
      //   path: "diary2",
      //   element: <DiaryView2 />,
      // }
    ],
  },
]);

export default router;

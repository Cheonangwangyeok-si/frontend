import { createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "../pages/Home/Home";
import AnalyzeView from "../pages/AnalyzeView";
import DiaryView from "../pages/DiaryView";
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
        element: <DiaryView />,
      },
    ],
  },
]);

export default router;

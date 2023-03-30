import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import "./common.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Index from "./Layouts/Main/Index";
import FunctionIndex from "./Layouts/Main/FunctionLayout/FunctionIndex";
import FunctionDetail from "./Layouts/Main/FunctionLayout/FunctionDetail";
import AppIndex from "./Layouts/Main/AppLayout/AppIndex";
import AppDetail from "./Layouts/Main/AppLayout/AppDetail";
import DisplayBox from "./components/FunctionDetailComponents/DisplayBox";
import RootLayout from "./routes/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/app", element: <AppIndex /> },
      {
        path: "/function",
        element: <FunctionIndex />,
      },
      {
        path: "/function/:id",
        element: <FunctionDetail />,
        children: [
          {
            path: "/function/:id/",
            element: <DisplayBox />,
          },
          {
            path: "/function/:id/:description_id",
            element: <DisplayBox />,
          },
        ],
      },
      {
        path: "/app/:id",
        element: <AppDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

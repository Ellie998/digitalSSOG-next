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
import MakeList from "./components/GetData/MakeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Index />,
        // children: [
        //   {
        //     path: "/functionCategory/:categoryName",
        //     element: <MakeList />,
        //     children: [],
        //   },
        // ],
      },
      { path: "/app", element: <AppIndex /> },
      {
        path: "/description/function/:functionName2",
        element: <FunctionDetail />,
      },
      {
        path: "/description/app/:appName",
        element: <AppDetail />,
        children: [],
      },

      {
        path: "/description/app/:appName/:functionName",
        element: <FunctionDetail />,
        children: [
          {
            path: "/description/app/:appName/:functionName/",
            element: <DisplayBox />,
          },
          {
            path: "/description/app/:appName/:functionName/:description_id",
            element: <DisplayBox />,
          },
        ],
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

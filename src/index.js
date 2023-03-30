import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Index from "./components/Main/Index";
import FunctionIndex from "./components/Main/FunctionIndex";
import AppIndex from "./components/Main/AppIndex";
import RootLayout from "./routes/RootLayout";
import FunctionDetail from "./components/Main/FunctionDetail";
import AppDetail from "./components/Main/AppDetail";

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

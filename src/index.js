import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";
import "./common.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Index, { loader as functionDataLoader } from "./Layouts/Main/Index";
import FunctionDetail from "./Layouts/Main/FunctionLayout/FunctionDetail";
// import AppIndex from "./Layouts/Main/AppLayout/AppIndex";
import DisplayBox from "./components/FunctionDetailComponents/DisplayBox/DisplayBox";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";
// import AppDetail from "./Layouts/Main/AppLayout/AppDetail";
// import FunctionDetailInApp, {
//   loader as detailDataLoader,
// } from "./Layouts/Main/FunctionLayout/FunctionDetailInApp";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: (
      <RootLayout>
        <ErrorPage />
      </RootLayout>
    ),
    // end: true,
    loader: functionDataLoader,

    children: [
      {
        index: true,
        element: <Index></Index>,
        loader: functionDataLoader,
      },
      {
        path: ":categoryName",
        element: <Index />,
        loader: functionDataLoader,
      },
      // { path: "app", element: <AppIndex /> },
      {
        path: "description/:functionName",
        element: <FunctionDetail />,
        loader: functionDataLoader,

        children: [
          {
            index: true,
            element: <DisplayBox />,
          },
          {
            path: ":appName/:descriptionId",
            element: <DisplayBox />,
          },
        ],
      },
      // {
      //   path: "/description/app/:appName",
      //   element: <AppDetail />,
      //   children: [],
      // },

      // {
      //   path: "description/app/:appName/:functionName",
      //   element: <FunctionDetailInApp />,
      //   loader: detailDataLoader,
      //   children: [
      //     {
      //       index: true,
      //       element: <DisplayBox />,
      //     },
      //     {
      //       path: ":description_id",
      //       element: <DisplayBox />,
      //     },
      //   ],
      // },
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

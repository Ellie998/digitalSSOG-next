import React from "react";
// import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { hydrate, render } from "react-dom";

import reportWebVitals from "./reportWebVitals";
import Index, { loader as functionDataLoader } from "./Layouts/Main/Index";
import FunctionDetail from "./Layouts/Main/FunctionLayout/FunctionDetail";
import DisplayBox from "./components/FunctionDetailComponents/DisplayBox/DisplayBox";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";

import "./common.css";

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
            path: ":appName/:methodId/:descriptionId",
            element: <DisplayBox />,
          },
        ],
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const app = (
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);

if (rootElement?.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <RouterProvider router={router} />
//     </HelmetProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

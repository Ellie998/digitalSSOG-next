import React from "react";
import ReactDOM from "react-dom/client";
import { hydrate } from "react-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import ReactGA from "react-ga";

import reportWebVitals from "./reportWebVitals";
import Index, { loader as functionDataLoader } from "./Layouts/Main/Index";
import FunctionDetail from "./Layouts/Main/FunctionLayout/FunctionDetail";
import DisplayBox from "./components/FunctionDetailComponents/DisplayBox/DisplayBox";
import RootLayout from "./routes/RootLayout";
import ErrorPage from "./routes/ErrorPage";

import "./common.css";

// google search console
const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId, { debug: true }); // react-ga 초기화 및 debug 사용

const history = createBrowserHistory();

history.listen((response) => {
  console.log(response.location.pathname);
  ReactGA.set({ page: response.location.pathname });
  ReactGA.pageview(response.location.pathname);
});

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

const app = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
if (root.hasChildNodes()) {
  hydrate(app, root);
} else {
  root.render(app, root);
  // render(<App />, root);
}
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

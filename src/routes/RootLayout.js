import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

import classes from "./RootLayout.module.css";

const isWidthLess500 = window.screen.width < 500 ? true : false;

function RootLayout({ children }) {
  const divRef = useRef();
  const location = useLocation();
  const pathArray = location.pathname.split("/");

  const pcScrollToTopCondition = () => {
    location.search === "" &&
      pathArray.length !== 5 &&
      divRef.current.scroll({
        top: 0,
        behavior: "smooth",
      });
  };
  const pcScrollToTop = () => {
    divRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  const mScrollToTopCondition = () => {
    location.search === "" &&
      pathArray.length !== 5 &&
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
  };
  const mScrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    isWidthLess500 ? mScrollToTopCondition() : pcScrollToTopCondition();
  }, [location]);

  return (
    <div className={classes.layout} id="pcScrollTarget" ref={divRef}>
      <Header />

      <Outlet />
      {children}

      <Footer />
      <button onClick={isWidthLess500 ? mScrollToTop : pcScrollToTop}>
        <i class="bi bi-arrow-up-short"></i>
      </button>
    </div>
  );
}

export default RootLayout;

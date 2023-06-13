import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";

import classes from "./RootLayout.module.css";

const isWidthLess500 = window.screen.width < 500 ? true : false;

function RootLayout({ children }) {
  const htmlElement = document.querySelector("html");
  const sizes = [
    "10px",
    "12px",
    "14px",
    "16px",
    "18px",
    "20px",
    "22px",
    "24px",
    "26px",
  ];
  const divRef = useRef();
  const [fontSize, setfontSize] = useState("16px");

  const location = useLocation();
  const pathArray = location.pathname.split("/");

  const pcScrollToTop = () => {
    divRef.current.scroll({
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
    const pcScrollToTopCondition = () => {
      location.search === "" &&
        pathArray.length !== 5 &&
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
    isWidthLess500 ? mScrollToTopCondition() : pcScrollToTopCondition();
  }, [location, pathArray.length]);

  function bigFontBtnClickHandler() {
    const index = sizes.findIndex((element) => element === fontSize);
    setfontSize(sizes[index + 1]);
  }
  function smallFontBtnClickHandler() {
    const index = sizes.findIndex((element) => element === fontSize);
    setfontSize(sizes[index - 1]);
  }
  useEffect(() => {
    htmlElement.style.fontSize = fontSize;
  }, [fontSize, htmlElement.style]);
  return (
    <div className={classes.layout} id="pcScrollTarget" ref={divRef}>
      <Header />

      <Outlet />
      {children}

      <Footer />
      <button
        className={classes.upBtn}
        onClick={isWidthLess500 ? mScrollToTop : pcScrollToTop}>
        <i className="bi bi-arrow-up-short"></i>
      </button>
      <button className={classes.bigBtn} onClick={bigFontBtnClickHandler}>
        <i className="bi bi-plus-circle"></i>
      </button>
      <button className={classes.smallBtn} onClick={smallFontBtnClickHandler}>
        <i className="bi bi-dash-circle"></i>
      </button>
    </div>
  );
}

export default RootLayout;

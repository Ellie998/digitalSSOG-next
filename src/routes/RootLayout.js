import { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

import classes from "./RootLayout.module.css";

function RootLayout({ children }) {
  const divRef = useRef(null);
  const location = useLocation();
  const pathArray = location.pathname.split("/");

  const scrollToTop = () => {
    location.search === "" &&
      pathArray.length !== 5 &&
      divRef.current.scroll({
        top: 0,
        behavior: "smooth",
      });
  };

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return (
    <div className={classes.layout} ref={divRef}>
      <ScrollToTop></ScrollToTop>
      <Header />

      <Outlet />
      {children}

      <Footer />
    </div>
  );
}

export default RootLayout;

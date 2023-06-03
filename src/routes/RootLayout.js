import { Outlet } from "react-router-dom";
import Header from "../Layouts/Header/Header";
import Footer from "../Layouts/Footer/Footer";
// import FunctionSidebar from "../Layouts/Main/FunctionLayout/FunctionSidebar";
import classes from "./RootLayout.module.css";
// import { useState } from "react";

function RootLayout({ children }) {
  // window.history.scrollRestoration = "auto";
  // const [menuClicked, setMenuClicked] = useState(false);
  // const [xClicked, setXClicked] = useState(true);

  // function menuBtnClickHandler(event) {
  //   setMenuClicked(true);
  //   setXClicked(false);
  // }
  // function xBtnClickHandler(event) {
  //   setMenuClicked(false);
  //   setXClicked(true);
  // }

  return (
    <div className={classes.layout}>
      {/* <div className={classes.header_back}></div> */}
      <Header />
      {/* <div className={classes.aside}>
        {!menuClicked && (
          <i class="bi bi-list" onClick={menuBtnClickHandler}></i>
        )}
        {!xClicked && <i class="bi bi-x-lg" onClick={xBtnClickHandler}></i>}
        <FunctionSidebar
          isMenuClicked={menuClicked}
          isXClicked={xClicked}></FunctionSidebar>
      </div> */}

      <Outlet />
      {children}
      <Footer />
    </div>
  );
}

export default RootLayout;

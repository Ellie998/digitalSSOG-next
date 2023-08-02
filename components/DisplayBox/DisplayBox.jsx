import AppHeader from "./sections/AppHeader";
import AppMain from "./sections/AppMain";
import AppNav from "./sections/AppNav";

import classes from "./DisplayBox.module.css";

function DisplayBox({ children }) {
  return (
    <div className={classes.DisplayBox}>
      <AppHeader />
      {!children ? <AppMain /> : children}
      <AppNav />
    </div>
  );
}

export default DisplayBox;

import AppHeader from "./sections/AppHeader";
import AppMain from "./sections/AppMain";
import AppNav from "./sections/AppNav";

import classes from "./DisplayBox.module.css";
function DisplayBox() {
  return (
    <div className={classes.DisplayBox}>
      <AppHeader />
      <AppMain />
      <AppNav />
    </div>
  );
}

export default DisplayBox;

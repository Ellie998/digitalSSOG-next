import AppHeader from "./sections/AppHeader";
import AppMain from "./sections/AppMain";
import AppNav from "./sections/AppNav";

import classes from "./DisplayBox.module.css";
function DisplayBox({ appName, methodId, descriptionId }) {
  return (
    <div className={classes.DisplayBox}>
      <AppHeader />
      <AppMain
        appName={appName}
        methodId={methodId}
        descriptionId={descriptionId}
      />
      <AppNav />
    </div>
  );
}

export default DisplayBox;

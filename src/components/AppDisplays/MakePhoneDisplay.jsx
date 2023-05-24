import styles from "./MakePhoneDisplay.module.css";
import "./display.css";

import { useParams } from "react-router-dom";

import AppHeader from "./sections/AppHeader";
import AppMain from "./sections/AppMain";
import AppNav from "./sections/AppNav";

function MakePhoneDisplay() {
  const { descriptionId } = useParams();

  return (
    <div className={styles.MakePhoneDisplay}>
      <AppHeader />
      <AppMain pathname={descriptionId} />
      <AppNav />
    </div>
  );
}

export default MakePhoneDisplay;

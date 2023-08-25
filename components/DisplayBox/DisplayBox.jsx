/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Phone from "stories/phone/molecules/Phone";
import AppMain from "./sections/AppMain";

function DisplayBox({ children }) {
  return <Phone main={<AppMain />} />;
}

export default DisplayBox;

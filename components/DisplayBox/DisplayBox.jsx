/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Phone from "stories/phone/molecules/Phone/index";
import AppMain from "components/DisplayBox/sections/AppMain";

function DisplayBox({ children }) {
  return <Phone main={<AppMain />} />;
}

export default DisplayBox;

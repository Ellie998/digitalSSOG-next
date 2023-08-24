/* eslint-disable react/prop-types */

import AppMain from "./sections/AppMain";

import Header from "stories/phone/organisms/Header";
import Nav from "stories/phone/organisms/Nav";
import Phone from "stories/phone/atoms/Phone";

function DisplayBox({ children }) {
  return (
    <Phone>
      <Header />
      {!children ? <AppMain /> : children}
      <Nav />
    </Phone>
  );
}

export default DisplayBox;

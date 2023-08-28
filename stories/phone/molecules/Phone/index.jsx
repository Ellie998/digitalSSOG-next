/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Header from "stories/phone/organisms/Header";
import Nav from "stories/phone/organisms/Nav";
import PhoneBackground from "stories/phone/atoms/PhoneBackground";

function Phone({ children, main }) {
  return (
    <PhoneBackground>
      <Header />

      {children ? children : main}
      <Nav />
    </PhoneBackground>
  );
}

export default Phone;

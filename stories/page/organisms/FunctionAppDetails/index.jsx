/* eslint-disable react/prop-types */
import { useContext } from "react";

import UrlContext from "components/page_context/UrlContext";

import FunctionMethodDetails from "stories/page/organisms/FunctionMethodDetails/index";
import Details from "stories/page/atoms/Details/index";

// eslint-disable-next-line react/prop-types, no-unused-vars
const FunctionAppDetails = ({ functionMethods }) => {
  const { myAppName } = useContext(UrlContext);

  return (
    <ol>
      {functionMethods?.map((functionMethodObject) => (
        <li key={Math.random()}>
          <Details
            open={
              myAppName === functionMethodObject.methodAppName ? true : false
            }
            summary={functionMethodObject.methodAppName + " 어플"}>
            <FunctionMethodDetails
              functionMethodObject={functionMethodObject}
            />
          </Details>
        </li>
      ))}
    </ol>
  );
};

export default FunctionAppDetails;

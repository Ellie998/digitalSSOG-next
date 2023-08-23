/* eslint-disable react/prop-types */
import { useContext } from "react";
import UrlContext from "components/page_context/UrlContext";

import DescriptionList from "stories/page/molecules/DescriptionList";
import DescriptionListInDetail from "stories/page/molecules/DescriptionListInDetail";

function FunctionMethodDetails({ functionMethodObject }) {
  const { myAppName, myMethodId } = useContext(UrlContext);
  const methodAppName = functionMethodObject.methodAppName;

  return (
    <ol>
      {functionMethodObject.howto.length !== 1 &&
        functionMethodObject.howto?.map((functionMethod, i) => (
          <DescriptionListInDetail
            key={i}
            sm={true}
            dataName={methodAppName}
            data={functionMethod}
            open={
              +myMethodId === functionMethod.methodNum &&
              myAppName === methodAppName
                ? true
                : false
            }
            summary={`방법 ${functionMethod.methodNum}${
              functionMethod.methodTitle
                ? `) ${functionMethod.methodTitle}`
                : ""
            }`}
          />
        ))}
      {functionMethodObject.howto.length === 1 && (
        <DescriptionList
          descriptions={functionMethodObject.howto[0].methodContent}
          dataAppName={methodAppName}
          dataMethodId={functionMethodObject.howto[0].methodNum}
        />
      )}
    </ol>
  );
}

export default FunctionMethodDetails;

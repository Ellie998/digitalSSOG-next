// components/TargetContent.jsx

import { useContext } from "react";
import UrlContext from "../../../page_context/UrlContext";

/**  make component border and tooltip */
const TargetContent = ({
  isWidthFull,
  children,
  className,
  targetOption,
  isNextDescriptionLink,
  onClick,
  id,
}) => {
  const targetStyle = {
    border: "2px solid red",
    width: isWidthFull ? "173px" : "fit-content",
    height: "fit-content",
    borderRadius: "2px",
  };
  const { setMyDescriptionId } = useContext(UrlContext);

  return (
    <>
      {!isNextDescriptionLink && (
        <div
          key={id}
          onClick={onClick}
          className={className}
          data-tooltip={targetOption ? "클릭" : null}
          style={targetOption ? targetStyle : null}>
          {children}
        </div>
      )}
      {isNextDescriptionLink && (
        <div
          key={id}
          className={className}
          data-tooltip={targetOption ? "클릭" : null}
          style={targetOption ? targetStyle : null}
          onClick={() => {
            onClick;
            targetOption &&
              setMyDescriptionId((prevValue) => (+prevValue + 1).toString());
          }}>
          {children}
        </div>
      )}
    </>
  );
};

export default TargetContent;

{
  /* <TargetContent
targetOption={navTriger === "chatList_group"}
isNextDescriptionLink={true}>
{chatListContents[0]}
</TargetContent>  */
}

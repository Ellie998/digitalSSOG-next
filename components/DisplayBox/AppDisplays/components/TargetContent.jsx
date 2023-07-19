// components/TargetContent.jsx

import { useContext } from "react";
import UrlContext from "../../../page_context/UrlContext";

/**  make component border and tooltip
 *
 * isWidthFull,
 * id,
 * onClick,
 * isNextDescriptionLink,
 * targetOption,
 * className,
 * children
 */
const TargetContent = (prop) => {
  const targetStyle = {
    border: "2px solid red",
    width: prop.isWidthFull ? "173px" : "fit-content",
    height: "fit-content",
    borderRadius: "2px",
  };
  const { setMyDescriptionId } = useContext(UrlContext);
  return (
    <>
      {!prop.isNextDescriptionLink && (
        <div
          key={prop.id}
          onClick={prop.onClick}
          className={prop.className}
          data-tooltip={prop.targetOption ? "클릭" : null}
          style={prop.targetOption ? targetStyle : null}>
          {prop.children}
        </div>
      )}
      {prop.isNextDescriptionLink && (
        <div
          key={prop.id}
          className={prop.className}
          data-tooltip={prop.targetOption ? "클릭" : null}
          style={prop.targetOption ? targetStyle : null}
          onClick={() => {
            prop.onClick ? prop.onClick() : null;
            prop.targetOption &&
              setMyDescriptionId((prevValue) => (+prevValue + 1).toString());
          }}>
          {prop.children}
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

/* eslint-disable react/prop-types */

import Icon from "components/DisplayBox/AppDisplays/components/UI/Icon";
import FunctionAppDetails from "stories/page/organisms/FunctionAppDetails";
import IconTextLine from "stories/page/molecules/IconTextLine";

// eslint-disable-next-line react/prop-types
const FunctionDescriptionBox = ({ functionMethods }) => {
  const iconStyle = {
    color: "rgb(156 163 175 /1)",
    fontSize: "0.875rem",
    margin: "0.5rem 0.25rem",
  };
  return (
    <div>
      <IconTextLine
        fontSize={"0.875rem"}
        color={"rgb(156 163 175 /1)"}
        hover={"color: rgb(55 65 81 /1)"}
        icon={<Icon styles={iconStyle} name={"info-circle-fill"} />}>
        아래 글씨를 눌러보세요
      </IconTextLine>
      <FunctionAppDetails functionMethods={functionMethods} />
    </div>
  );
};

export default FunctionDescriptionBox;

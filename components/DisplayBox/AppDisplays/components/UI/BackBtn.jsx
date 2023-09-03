/* eslint-disable react/prop-types */

import TargetBox from "stories/phone/atoms/TargetBox";
import Icon from "stories/phone/atoms/Icon";

export default function BackBtn({
  condition,
  isNextTriger,
  onClick,
  isBackTriger,
}) {
  return (
    <TargetBox
      onClick={onClick}
      condition={condition}
      isNextTriger={isNextTriger}
      isBackTriger={isBackTriger}>
      <Icon name="arrow-left" />
    </TargetBox>
  );
}

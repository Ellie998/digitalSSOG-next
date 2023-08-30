/* eslint-disable react/prop-types */

import TargetContent from "../TargetContent";
import IconBottom from "stories/phone/molecules/IconBottom";

function Grid_4x4({ className, items, iconClassName_common, iconClassName }) {
  return (
    <div
      className={`${className} mt-1 mx-1 grid grid-cols-4 gap-y-1 rounded-lg p-2 animate-fadeInUp text-center`}>
      {items?.map((item, i) => (
        <TargetContent
          className={`cursor-pointer`}
          key={i}
          targetOption={item.targetOption}
          isNextDescriptionLink={item.isNextDescriptionLink}
          onClick={item.onClick}>
          <IconBottom
            icon={{
              name: item.iconName,
              style: {
                fontSize: "0.5rem",
                backgroundColor: item.backgroundColor
                  ? item.backgroundColor
                  : "white",
                padding: "6px",
                width: "fit-content",
                color: item.color ? item.color : "black",
              },
            }}
            description={{
              content: item.content,
              style: { fontSize: "0.5rem", marginTop: "0.25rem" },
            }}
            className={`${iconClassName_common} ${
              iconClassName ? iconClassName[i] : ""
            } text-2xs`}
          />
        </TargetContent>
      ))}
    </div>
  );
}

export default Grid_4x4;

import Icon from "../Icon";
import TargetContent from "../TargetContent";

function Grid_4x4({
  className,
  items,
  iconClassName_common,
  iconClassName,
  contentClassName,
}) {
  return (
    <div
      className={`${className} mt-1 mx-1 grid grid-cols-4 gap-y-1 rounded-lg p-2 animate-fadeInUp text-center`}>
      {items?.map((item, i) => (
        <TargetContent
          className={`cursor-pointer`}
          key={i}
          targetOption={item.targetOption}
          isNextDescriptionLink={item.isNextDescriptionLink}>
          <Icon
            name={item.iconName}
            className={`${iconClassName_common} ${
              iconClassName ? iconClassName[i] : ""
            } text-2xs`}
          />
          <div className={`${contentClassName} text-2xs  mt-1`}>
            {item.content}
          </div>
        </TargetContent>
      ))}
    </div>
  );
}

export default Grid_4x4;

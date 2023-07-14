import Icon from "../Icon";

export default function PowerSwitch({
  className,
  setIsClicked,
  iconClassName,
}) {
  return (
    <div className={`${className} cursor-pointer`} onClick={setIsClicked}>
      <Icon
        name="power"
        className={`text-2xl block text-center text-white ${iconClassName}`}></Icon>
    </div>
  );
}

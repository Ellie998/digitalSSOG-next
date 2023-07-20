export default function AppHeader({
  className,
  leftItem,
  midItem,
  rightItem,
  children,
  onClick,
  id,
}) {
  return (
    <>
      <div
        key={id}
        className={`flex justify-between w-full align-middle items-center mr-1  ${className}`}
        onClick={onClick}>
        {/* left item */}
        <div className="flex justify-between">
          {leftItem?.map((item, i) => (
            <div key={i} className="ml-1">
              {item}
            </div>
          ))}
        </div>
        {/* mid item */}
        <div className="flex justify-between">
          {midItem?.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </div>
        {/* right item */}
        <div className="flex justify-between">
          {rightItem?.map((item, i) => (
            <div key={i} className="mr-1">
              {item}
            </div>
          ))}
        </div>
      </div>
      {children}
    </>
  );
}

export default function AppHeader({
  className,
  leftItem,
  midItem,
  rightItem,
  children,
  id,
}) {
  return (
    <>
      <div
        key={id}
        className={`flex justify-between w-50 align-middle items-center ${className}`}>
        {/* left item */}
        <div className="ml-1 flex justify-between">
          {leftItem?.map((item, i) => (
            <div key={i}>{item}</div>
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
            <div key={i}>{item}</div>
          ))}
        </div>
      </div>
      {children}
    </>
  );
}

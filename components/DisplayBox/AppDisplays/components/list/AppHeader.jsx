export default function AppHeader({
  className,
  leftItem,
  midItem,
  rightItem,
  children,
  key,
}) {
  return (
    <>
      <div
        key={key}
        className={`flex justify-between w-50 align-middle items-center ${className}`}>
        {/* left item */}
        <div className="ml-1 flex justify-between">
          {leftItem?.map((item) => item)}
        </div>
        {/* mid item */}
        <div className="flex justify-between">
          {midItem?.map((item) => item)}
        </div>
        {/* right item */}
        <div className="flex justify-between">
          {rightItem?.map((item) => item)}
        </div>
      </div>
      {children}
    </>
  );
}

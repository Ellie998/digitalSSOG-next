export default function StackedList_Profile({
  className,
  profile,
  title,
  subTitle,
  info,
  subInfo,
  onClick,
  children,
  key,
}) {
  return (
    <>
      <div
        key={key}
        className={`grid grid-cols-6 w-50 cursor-pointer ${className}`}
        onClick={onClick}>
        {/* profile */}
        <div
          className={`col-start-1 col-end-2 row-start-1 row-end-3 self-center profileIconWrap ${profile.className}`}>
          {profile.content}
        </div>
        {/* title */}
        <div
          className={` text-sm text-left  h-4 col-start-2 row-start-1 ${
            info !== undefined ? "col-end-4" : "col-end-7"
          } ${subTitle !== undefined ? "row-end-2" : "row-end-3 self-center"} ${
            title.className
          }`}>
          {title.content}
        </div>
        {/* subTitle */}
        {subTitle !== undefined && (
          <div
            className={` h-4 text-2xs text-gray-400 col-start-2  row-start-2 row-end-3  ${
              info === undefined ? "col-end-7" : "col-end-4"
            } ${subTitle.className}`}>
            {subTitle.content}
          </div>
        )}
        {/* info */}
        {info !== undefined && (
          <div
            className={` text-2xs  text-neutral-500 h-4 col-start-4 col-end-7 row-start-1
            ${subInfo !== undefined ? "row-end-2" : "row-end-3 self-center"} ${
              info.className
            }`}>
            {info.content}
          </div>
        )}
        {/* sub info */}
        {subInfo !== undefined && (
          <div
            className={`text-2xs col-start-4 col-end-7 row-start-2 row-end-3 h-4  ${subInfo.className}`}>
            {subInfo.content}
          </div>
        )}
      </div>
      {children}
    </>
  );
}

export default function ListOption({
  className,
  title,
  subTitle,
  onClick,
  children,
  id,
}) {
  return (
    <div
      key={id}
      className={`hover:bg-gray-100 py-[10px] px-[20px] animate-fadeInDown ${className}`}
      onClick={onClick}>
      {/* title */}
      {title !== undefined && (
        <div className={`text-2xs font-bold ${title.className}`}>
          {title.content}
        </div>
      )}
      {/* subTitle */}
      {subTitle !== undefined && (
        <div className={`text-2xs ${subTitle.className}`}>
          {subTitle.content}
        </div>
      )}
      {children}
    </div>
  );
}

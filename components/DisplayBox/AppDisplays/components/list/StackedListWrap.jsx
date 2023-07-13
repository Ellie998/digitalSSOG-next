export default function StackedListWrap({
  className,
  listTitle,
  children,
  id,
}) {
  return (
    <div
      key={id}
      className={`w-50 border-solid border-b border-gray-200 py-1  ${className}`}>
      {listTitle !== undefined && (
        <div className={`display_subTitle--light ${listTitle.className}`}>
          {listTitle.content}
        </div>
      )}
      {children}
    </div>
  );
}

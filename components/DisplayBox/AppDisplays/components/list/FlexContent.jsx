export default function FlexContent({ className, items, children, key }) {
  return (
    <>
      <div
        key={key}
        className={`flex justify-between align-middle items-center ${className}`}>
        {items?.map((item) => item)}
      </div>
      {children}
    </>
  );
}

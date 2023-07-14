export default function FlexContent({ className, items, children, id }) {
  return (
    <>
      <div
        key={id}
        className={`flex justify-between align-middle items-center ${className}`}>
        {items?.map((item, i) => (
          <div key={`flexItem${i}`} className={`ml-1`}>
            {item}
          </div>
        ))}
      </div>
      {children}
    </>
  );
}

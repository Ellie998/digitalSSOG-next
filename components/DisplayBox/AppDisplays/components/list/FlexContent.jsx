export default function FlexContent({ className, items, children, id }) {
  return (
    <>
      <div
        key={id}
        className={`flex justify-between align-middle items-center ${className}`}>
        {items?.map((item, i) => (
          <div key={`flexItem${i}`}>{item}</div>
        ))}
      </div>
      {children}
    </>
  );
}

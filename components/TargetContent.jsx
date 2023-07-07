// components/TargetContent.jsx

/**  make component border and tooltip */
const TargetContent = ({ children, className, targetOption }) => {
  return (
    <div
      className={className}
      tooltip={targetOption ? "클릭" : null}
      style={targetOption ? { border: "1px solid red" } : null}>
      {children}
    </div>
  );
};

export default TargetContent;

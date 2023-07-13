export default function Button({
  className,
  btnColor,
  textColor,
  borderColor,
  width,
  onClick,
  content,
}) {
  return (
    <div
      className={`rounded p-1 text-center text-sm z-0 ${className}`}
      onClick={onClick}
      style={{
        width: width ? width : "160px",
        backgroundColor: btnColor ? btnColor : "rgb(255, 255, 255)",
        color: textColor ? textColor : "rgb(30, 30, 30)",
        border: borderColor
          ? `1px solid ${borderColor}`
          : "1px solid transparent",
      }}>
      {content}
    </div>
  );
}
// .border_orange {
//   border: 1px solid orange;
//   color: rgb(255, 115, 0);
//   text-align: center;
//   border-radius: 4px;
//   padding: 2px;
//   width: 160px;
// }
// .background_orange {
//   background-color: rgb(255, 115, 0);
//   color: white;
//   text-align: center;
//   border-radius: 4px;
//   padding: 2px;
//   width: 160px;
// }

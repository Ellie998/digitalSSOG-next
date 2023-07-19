import { useState } from "react";
import Icon from "./Icon";

export default function Alert({
  icon,
  className,
  textColor,
  borderColor,
  bgColor,
  width,
  onClick,
  content,
  setIsAlertOpen,
}) {
  const [closeTriger, setCloseTriger] = useState(false);
  setTimeout(() => {
    setCloseTriger(true);
  }, 2000);

  setTimeout(() => {
    setIsAlertOpen(false);
  }, 2500);

  return (
    <div
      className={` relative text-xs rounded-xl py-1 px-2 text-center hover:cursor-pointer animate-fadeInUp mx-auto ${className} ${
        closeTriger ? "animate-fadeOutDown" : ""
      }`}
      onClick={onClick}
      style={{
        width: width ? width : "max-content",
        backgroundColor: bgColor ? bgColor : "rgba(40, 40, 40, 0.51)",
        color: textColor ? textColor : "rgb(255, 255, 255)",
        border: borderColor
          ? `1px solid ${borderColor}`
          : "1px solid transparent",
      }}>
      <Icon
        name={`${icon.name}`}
        className={`mr-1 rounded-lg p-0.5 ${icon.className}`}
      />
      {content}
    </div>
  );
}

import classes from "./NoScrollBar.module.css";

export default function NoScrollBar({ className, children, height, onClick }) {
  return (
    <div
      onClick={onClick}
      id="component_NoScrollBar"
      className={`${classes.layout} ${className}`}
      style={{ height: height ? height : "auto" }}>
      {children}
    </div>
  );
}

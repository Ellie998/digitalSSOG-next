import classes from "./NoScrollBar.module.css";

export default function NoScrollBar({ className, children, height }) {
  return (
    <div
      className={`${classes.layout} ${className}`}
      style={{ height: height ? height : "auto" }}>
      {children}
    </div>
  );
}

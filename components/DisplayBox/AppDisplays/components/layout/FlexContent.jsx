import classes from "../MakeList.module.css";
export default function FlexContent({ children, onClick }) {
  return (
    <div
      className={`${classes["layout_flex--spaceBetween"]}`}
      onClick={onClick}>
      {children}
    </div>
  );
}

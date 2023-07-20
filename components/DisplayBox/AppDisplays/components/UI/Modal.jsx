import TargetContent from "../TargetContent";
import classes from "./Modal.module.css";

export default function Modal({
  className,
  onClickBackDrop,
  children,
  modalClassName,
}) {
  return (
    <div className={`${classes.modalWrap} ${modalClassName}`}>
      <TargetContent
        className={classes.backdrop}
        onClick={onClickBackDrop}
        goBackDescription></TargetContent>
      <div className={`${classes.modal} ${className}`}>{children}</div>
    </div>
  );
}

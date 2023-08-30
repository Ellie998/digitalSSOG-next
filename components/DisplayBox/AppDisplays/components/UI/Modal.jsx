/* eslint-disable react/prop-types */
import TargetContent from "../TargetContent";
import classes from "./Modal.module.css";

export default function Modal({
  style,
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
      <div className={`${classes.modal} ${className}`} style={style}>
        {children}
      </div>
    </div>
  );
}

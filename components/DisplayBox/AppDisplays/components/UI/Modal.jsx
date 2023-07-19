import classes from "./Modal.module.css";

export default function Modal({
  className,
  onClickBackDrop,
  children,
  modalClassName,
}) {
  return (
    <div className={`${classes.modalWrap} ${modalClassName}`}>
      <div className={classes.backdrop} onClick={onClickBackDrop}></div>
      <div className={`${classes.modal} ${className}`}>{children}</div>
    </div>
  );
}

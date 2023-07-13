import classes from "./Modal.module.css";

export default function Modal({ className, onClickBackDrop, children }) {
  return (
    <div className={`${classes.modalWrap}`}>
      <div className={classes.backdrop} onClick={onClickBackDrop}></div>
      <div className={`${classes.modal} ${className}`}>{children}</div>
    </div>
  );
}

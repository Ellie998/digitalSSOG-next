import classes from "./BlurModal.module.css";

export default function BlurModal({
  className,
  onClickBackDrop,
  children,
  center,
  bottom,
}) {
  return (
    <>
      <div className={`${classes.modalWrap}`}>
        <div className={classes.backdrop} onClick={onClickBackDrop}></div>
        <div className={`${classes.modal} ${className}`}>{children}</div>
      </div>
    </>
  );
}

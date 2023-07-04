import classes from "./ChoiceImg.module.css";

function ChoiceImg({ onImgCheckHandler, choicedImgs }) {
  const numArray = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className={classes["display_grid--col4"]}>
      {numArray?.map((num) => (
        <div className={classes.display_flex} key={Math.random()}>
          <label htmlFor={`box${num}`}>
            <input
              className={classes.checkBox}
              type="checkbox"
              id={`box${num}`}
              onChange={onImgCheckHandler}
              checked={
                choicedImgs.includes(`box${num}`) ? true : false
              }></input>
            <div className={classes.imgBox}>{num}</div>
          </label>
          <div className={classes.iconWrap}>
            <i className="bi bi-arrows-fullscreen"></i>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChoiceImg;

import classes from "./MakeList.module.css";

// -------- MAKE LIST REPEAT WITH COUSTOM CONTENT
function MakeList({
  listStyle,
  list,
  listOnClick,
  item1,
  item2,
  item3,
  item4,
  children,
}) {
  return (
    <>
      {listStyle === "flex_spaceBetween" && (
        <>
          <div
            className={`${classes["layout_flex--spaceBetween"]}`}
            onClick={listOnClick}>
            <div
              className={`${classes["grid_firstCol--row1"]} ${
                classes[item1.className]
              }`}>
              {item1.content}
            </div>
            <div
              className={`${classes["grid_secondCol--row1"]} ${
                classes[item2.className]
              }`}>
              {item2.content}
            </div>
            <div
              className={`${classes["grid_thirdCol--row1"]} ${
                classes[item3.className]
              }`}>
              {item3.content}
            </div>
            <div
              className={`${classes["grid_thirdCol--row1"]} ${
                classes[item4.className]
              }`}>
              {item4.content}
            </div>
          </div>
          {children}
        </>
      )}
      {listStyle === "flex_spaceAround" && <div></div>}
      {listStyle === "grid_oneLine" && (
        <>
          <div className={`${classes.layout_grid}`} onClick={listOnClick}>
            <div
              className={`${classes["grid_firstCol--row1"]} ${
                classes[item1.className]
              }`}>
              {item1.content}
            </div>
            <div
              className={`${
                item3.content !== ""
                  ? classes["grid_secondCol--row1"]
                  : classes["grid_secondToThirdCol--row1"]
              } ${classes[item2.className]}`}>
              {item2.content}
            </div>

            {item3.content !== "" && (
              <div
                className={`${classes["grid_thirdCol--row1"]} ${
                  classes[item3.className]
                }`}>
                {item3.content}
              </div>
            )}
          </div>
          {children}
        </>
      )}
      {listStyle === "grid_twoLine" && <div></div>}
    </>
  );
}

export default MakeList;

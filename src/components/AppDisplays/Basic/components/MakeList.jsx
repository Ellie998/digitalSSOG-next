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
  subItem1,
  subItem2,
  subItem3,
  children,
  leftFlexItem,
  rightFlexItem,
}) {
  return (
    <>
      {listStyle === "flex_spaceBetween" && rightFlexItem !== undefined && (
        <div
          className={`${classes["layout_flex--spaceBetween"]}`}
          onClick={listOnClick}>
          <div className={`${classes["flex_leftItems"]}`}>
            {leftFlexItem?.map((item) => (
              <div className={classes[item.classeName]}>{item.content}</div>
            ))}
          </div>
          <div className={`${classes["flex_rightItems"]}`}>
            {rightFlexItem?.map((item) => (
              <div className={classes[item.classeName]}>{item.content}</div>
            ))}
          </div>
        </div>
      )}
      {listStyle === "flex_spaceBetween" && rightFlexItem === undefined && (
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
                item3 !== undefined && item3.className !== ""
                  ? classes["grid_secondCol--row1"]
                  : classes["grid_secondToThirdCol--row1"]
              } ${classes[item2.className]}`}>
              {item2.content}
            </div>

            {item3 !== undefined && item3.className !== "" && (
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
      {listStyle === "grid_twoLine" && (
        <>
          <div className={`${classes.layout_grid}`} onClick={listOnClick}>
            <div
              className={`${
                subItem1
                  ? classes["grid_firstCol--row1"]
                  : classes["grid_firstCol--row12"]
              } ${classes[item1.className]}`}>
              {item1.content}
            </div>
            <div
              className={`${
                item3 !== undefined && item3.content !== ""
                  ? classes["grid_secondCol--row1"]
                  : classes["grid_secondToThirdCol--row1"]
              } ${classes[item2.className]}`}>
              {item2.content}
            </div>

            {item3 !== undefined && item3.content !== "" && (
              <div
                className={`${classes["grid_thirdCol--row1"]} ${
                  classes[item3.className]
                }`}>
                {item3.content}
              </div>
            )}
            {subItem1 !== undefined && (
              <div
                className={`${classes["grid_firstCol--row2"]} ${
                  classes[subItem1.className]
                }`}>
                {subItem1.content}
              </div>
            )}
            {subItem2 !== undefined && (
              <div
                className={`${classes["grid_secondCol--row2"]} ${
                  classes[subItem2.className]
                }`}>
                {subItem2.content}
              </div>
            )}
            {subItem3 !== undefined && (
              <div
                className={`${classes["grid_thirdCol--row2"]} ${
                  classes[subItem3.className]
                }`}>
                {subItem3.content}
              </div>
            )}
          </div>
          {children}
        </>
      )}
    </>
  );
}

export default MakeList;

import classes from "./MakeList.module.css";

// get html content from prarent component and make same layout list
// case 1:        icon    title     infoTop
// 메시지           icon    content   infoBottom
// case 2 :       icon    title
//  연락처                  content
// case 3:        icon    title      info
//  파일 리스트버전   icon    content    info
//  카카오톡 프로필
// get element and analysis html and make layout
// css는 list 페이지에 만들어 놓고 그 class로 사용하도록?
// navlink는 만들어서 보내기

// -------- MAKE LIST REPEAT WITH SAME CONTENT
// function MakeList({ children, repeatNum }) {
//   const numArray = [];
//   for (let i = 0; i < repeatNum; i++) {
//     numArray[i] = i;
//   }
//   const content = numArray?.map(() => {
//     return children;
//   });

//   return <div className={classes.listLayout}>{content}</div>;
// }

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
          </div>
          {children}
        </>
      )}
      {listStyle === "grid_twoLine" && <div></div>}
    </>
  );
}

export default MakeList;

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
function MakeList({ children, repeatNum }) {
  const numArray = [];
  for (let i = 0; i < repeatNum; i++) {
    numArray[i] = i;
  }
  const content = numArray?.map(() => {
    return children;
  });

  return <div className={classes.listLayout}>{content}</div>;
}

export default MakeList;

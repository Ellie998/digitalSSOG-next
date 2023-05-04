import { NavLink } from "react-router-dom";
import styles from "./MakeMethodList.module.css"

const numEmogi = [ ' 0️⃣',' 1️⃣', ' 2️⃣',' 3️⃣','4️⃣' ];

function MakeMethodList({functionMethod,functionName, appName}){
  let num = 0;
  
  // function findChoicedAppName(event) {
  //   let temp1, temp2;

  //     temp1 = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.innerText;
  //     temp2 = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstChild.firstChild.innerText;
    
  
  //   // console.log(temp1);
  //   // console.log(temp2);

  //   if (temp2 === undefined) {
  //     // console.log('clicked undefined!');
  //     // console.log(temp1);
  //     setName(temp1);  
  //   } else if ( temp1.length < 20 && temp1!== "화면을 보고싶은 목차를 click!" ){
  //     setName(temp1);  
  //   } else if (temp1.length > 20 && temp2 !== "화면을 보고싶은 목차를 click!" ){
  //     setName(temp2);  
  //   }
  // }
  // console.log(clickedAppName)
  
  return(
    <ol className={styles.MakeMethodList}>
    {
      functionMethod.methodContent?.map((methodDescription)=>(
        <li data-tooltip-midleft="클릭시 화면이 표시됩니다." key={methodDescription} className='list-hover description-list' >
        {/* <li data-tooltip-midleft="클릭시 화면이 표시됩니다." key={methodDescription} className='list-hover description-list' onClick={findChoicedAppName} > */}
          {/* <NavLink to={'/description/app/'+ clickedAppName +'/' + name +'/' + num}> {numEmogi[num++]} {methodDescription}</NavLink> */}
          <NavLink to={'/description/app/'+ appName +'/' + functionName +'/' + num}> {numEmogi[num++]} {methodDescription}</NavLink>
          {/* <NavLink to={'./' + num}> {numEmogi[num++]} {methodDescription}</NavLink> */}
        </li>
      ))
    }
  </ol>
  )
}

export default MakeMethodList;
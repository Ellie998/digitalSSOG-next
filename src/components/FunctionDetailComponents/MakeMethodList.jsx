import { NavLink } from "react-router-dom";
import styles from "./MakeMethodList.module.css"

const numEmogi = [ ' 0️⃣',' 1️⃣', ' 2️⃣',' 3️⃣','4️⃣' ];

function MakeMethodList({functionMethod, name}){
  let num = 0;

  return(
    <ol className={styles.MakeMethodList}>
    {
      functionMethod.methodContent?.map((methodDescription)=>(
        <li data-tooltip-midleft="클릭시 화면이 표시됩니다." key={methodDescription} className='list-hover description-list' >
          <NavLink to={'/function/'+ name +'/' + num}> {numEmogi[num++]} {methodDescription}</NavLink>
        </li>
      ))
    }
  </ol>
  )
}

export default MakeMethodList;
import { NavLink } from "react-router-dom";
import styles from "./MakeMethodList.module.css"

function MakeMethodList({functionMethod, name}){
  let num = 0;

  return(
    <ol className={styles.MakeMethodList}>
    {
      functionMethod.methodContent?.map((methodDescription)=>(
        <li key={methodDescription} className='list-hover description-list' >
          <NavLink to={'/function/'+ name +'/' + num++}>{methodDescription}</NavLink>
        </li>
      ))
    }
  </ol>
  )
}

export default MakeMethodList;